import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { heroImage, publishedAt, title } = post

  return (
    <section className="relative -mt-[10.4rem] flex items-end">
      <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          <div className="">        
            {publishedAt && (
              <div className="flex flex-col gap-1 text-white inter opacity-[0.6] text-2xl pb-3 font-semibold relative z-20">
                <time dateTime={publishedAt}>
                  {formatDateTime(publishedAt)}
                </time>
              </div>
            )}
            <h1 className="text-white inter text-4xl md:text-7xl font-semibold relative z-20 pb-5">{title}</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          </div>
        </div>
      </div>
      <div className="h-[476px] select-none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage} />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-gradient-to-t bg-jet/40" />
      </div>
    </section>
  )
}
