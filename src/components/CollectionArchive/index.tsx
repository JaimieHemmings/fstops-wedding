import React from 'react'
import Link from 'next/link'
import { Media } from '../Media'

export type Props = {
  posts: {
    title: string
    slug: string
    heroImage: any
    publishedAt: string
  }[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props
  return (
    <div className="flex flex-col md:flex-row container mx-auto pb-[5rem] pt-5 md:pt-[3rem] flex-wrap">
      {posts?.map((result, index) => {
        if (typeof result === 'object' && result !== null) {
          return (
            <div className="basis-1/2 p-5" key={index}>
              <Link
                href={`/news/${result.slug}`}
                className="w-full h-full flex flex-col justify-between relative rounded-xl overflow-hidden group"
              >
                <Media
                  resource={result.heroImage}
                  className="absolute z-10 w-full h-full top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  fill
                />
                <div className="absolute z-10 w-full h-full bg-jet/40" />
                <div className="p-3 flex flex-row justify-between relative z-20">
                  <p className="text-white inter font-semibold opacity-[0.6]">
                  {new Date(result.publishedAt).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
                  </p>
                </div>
                <h2 className="text-white relative z-[20] px-3 font-semibold text-4xl pb-[3rem] pt-[6rem]">
                  {result.title}
                </h2>
              </Link>
            </div>
          )
        }

        return null
      })}
    </div>
  )
}
