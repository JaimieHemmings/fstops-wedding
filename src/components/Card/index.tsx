import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  heroImage: any
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { doc, relationTo, title: titleFromProps } = props

  const { slug, title } = doc || {}

  const href = `/${relationTo}/${slug}`


  console.log(props)

  return (
    <Link
      href={`/news/${href}`}
      className="w-full h-full flex flex-col justify-between"
    >
      <h2 className="text-white relative z-[20] px-3 font-semibold text-4xl pb-[3rem] pt-[6rem]">
        {title}
      </h2>
    </Link>
  )
}
