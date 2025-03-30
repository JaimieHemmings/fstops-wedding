import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Media } from '@/components/Media'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const portfolioItem = await payload.find({
    collection: 'portfolioItem',
    draft: false,
    limit: 1,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = portfolioItem.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/portfolio/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <article>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container pb-8">
          <RichText className="max-w-[48rem] mx-auto prose md:prose-md lg:prose-lg xl:prose-xl text-jet" data={post.content} enableGutter={false} />
        </div>
      </div>
      <div className="md:flex flex-row justify-between h-full">
        <div className="basis-1/2 relative">
          <div className="sticky top-0">
            {post.media?.imagesLeft && post.media.imagesLeft.length > 0 && 
              post.media.imagesLeft.map((image, index) => (
                <Media
                  key={index}
                  imgClassName="rounded-lg"
                  loading='lazy'
                  resource={image.media}
                />
              ))
            }
          </div>
        </div>
        <div className="basis-1/2 relative">
          {post.media?.imagesRight && post.media.imagesRight.length > 0 && 
            post.media.imagesRight.map((image, index) => (
              <Media
                key={index}
                imgClassName="rounded-lg"
                loading='lazy'
                resource={image.media}
              />
            ))
          }
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'portfolioItem',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
