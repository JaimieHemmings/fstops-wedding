import type { Metadata } from 'next/types'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { Media } from '@/components/Media'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const items = await payload.find({
    collection: 'portfolioItem',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      heroImage: true,
      publishedAt: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold pb-5">
            A showcase of captured moments
          </h1>
          <p className="inter opacity-[0.6] text-2xl md:text-4xl font-semibold">
            Exploring stories through the lens, one moment at a time.
          </p>
      </div>
      <div className="container">
      {items.docs.length !== 0 && (
        items.docs.map((item) => (
          <Link href={`/portfolio/${item.slug}`} key={item.id} className="flex flex-col justify-center align-middle rounded-lg text-center py-[20rem] dark-overlay relative center-bg-img overflow-hidden">
            <CornerBorders />
            <Media
              resource={item.heroImage}
              fill
              imgClassName="absolute inset-0 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              className="w-full h-full rounded-lg absolute inset-0"
            />
            <div className="absolute z-[25] w-full h-full bg-jet/40 top-0 left-0" />
            <div className="relative z-30 h-full flex flex-col justify-end p-8">
              <p className="text-white relative z-20 opacity-[0.6] inter font-semibold text-2xl">
              {/* @ts-ignore */}
              {new Date(item.publishedAt).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
              </p>
              <h2 className="relative font-semibold text-5xl pt-5 text-white">
                {item.title}
              </h2>
            </div>
          </Link>
        ))
      )}
        {items.docs.length === 0 && (
          <div className="text-center">
            <h2 className="text-3xl font-semibold">No items found</h2>
            <p className="text-lg">Try adjusting your filters or search.</p>
          </div>
        )}
      </div>
      <div className="container">
        {items.totalPages > 1 && items.page && (
          <Pagination page={items.page} totalPages={items.totalPages} />
        )}
      </div>
    </div>
  )
}

const CornerBorders = () => {
  return (
    <>
    <div className="absolute top-8 left-8 z-30">
       <div className="w-6 h-1 bg-white" />
       <div className="w-1 h-6 bg-white" />
    </div>
    <div className="absolute top-8 right-8 z-30">
      <div className="w-6 h-1 bg-white" />
      <div className="w-1 h-6 bg-white absolute right-0 top-0" />
    </div>
    <div className="absolute bottom-8 left-8 z-30">
      <div className="w-6 h-1 bg-white absolute bottom-0" />
      <div className="w-1 h-6 bg-white absolute bottom-0" />
    </div>
    <div className="absolute bottom-8 right-8 z-30">
      <div className="w-6 h-1 bg-white absolute bottom-0 right-0" />
      <div className="w-1 h-6 bg-white absolute right-0 bottom-0" />
    </div>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Portfolio`,
    description: `Portfolio`,
  }
}
