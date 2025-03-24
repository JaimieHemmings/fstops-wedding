import { Media } from '@/components/Media'
import Link from 'next/link'
import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import SingleReview from './Components/SingleReview';

interface BasicGridBlockProps {
  intro: string
  featuredImage: any
  ctaTitle: string
  ctaText: string
  ctaImage: any
  ctaLink: {
    slug: string
    title: string
  }
  learnMoreLink: {
    slug: string
    title: string
  }
}

const BasicGridBlock: React.FC<BasicGridBlockProps> = ({intro, featuredImage, ctaTitle, ctaText, ctaImage, ctaLink, learnMoreLink}) => {
  return (
    <section className="block md:flex flex-row container mx-auto md:gap-20 pt-5 py-[5rem]">
      <div className="block md:flex gap-4 flex-col justify-between md:w-2/3">
        <div className="block lg:flex flex-row justify-between gap-2 md:gap-2 pb-5">
          <h2 className="opacity-[0.6] px-3 font-medium inter text-xl basis-1/2">
            {intro}
          </h2>
          <div className=" basis-1/2 max-lg:py-[5rem] p-3 align-baseline max-md:pt-5 flex flex-row justify-between">
            <SingleReview />
          </div>
        </div>
        <div className="relative h-auto min-h-[500px]">
          <Media
            fill
            imgClassName="rounded-3xl p-3 object-cover"
            loading='lazy'
            resource={featuredImage}
          />
        </div>
      </div>
      <div className="md:w-1/3 block md:flex flex-col justify-between p-3">
        <div className="rounded-lg bg-white p-5 mb-5 relative">
            <Media
              className="w-full h-auto mb-3"
              imgClassName="rounded-xl"
              loading='lazy'
              resource={ctaImage}
            />
          <h3 className="text-xl inter font-semibold pb-3">
            {ctaTitle}
          </h3>
          <p className="opacity-[0.6] pb-10">
            {ctaText}
          </p>
          <Link href={`/${ctaLink.slug}`}>
            <FaArrowCircleUp
              className="rotate-45 absolute right-5 bottom-5 text-jet w-10 h-10 transition-all duration-300 ease-in-out hover:rotate-0"
            />
          </Link>
        </div>
        <Link 
          className="group font-semibold text-xl relative mt-5 border-b-2 border-jet pb-2 inline-flex items-center" 
          href={`/${learnMoreLink.slug}`}
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="ml-3 transition-all duration-300 ease-in-out group-hover:ml-10"
            style={{
              width: '30px',
              height: '30px',
              fill: 'currentColor',
              flexShrink: 0
            }}
            focusable="false"
          >
            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default BasicGridBlock
