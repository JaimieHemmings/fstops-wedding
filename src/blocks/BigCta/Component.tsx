import React from 'react'
import { Media } from '@/components/Media'
import Link from 'next/link'

interface BigCtaProps {
  image: any
  title: string
  paragraph: string
  link: any
}

const BigCta: React.FC<BigCtaProps> = ({ image, title, paragraph, link }) => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center relative py-[5rem]">
      <Media
        fill
        imgClassName="object-cover"
        loading='lazy'
        resource={image}
      />
      <div className="absolute w-full h-full top-0 left-0 bg-jet/40" />
      <div className="relative z-10 container lg:w-[80vw] xl:w-[50vw] mx-auto flex flex-col justify-center">
        <h2 className="text-white inter text-3xl md:text-7xl font-bold max-md:text-center pb-5">
          {title}
        </h2>
        <div className="md:w-[50%] md:ml-[50%] max-md:text-center">
          <p className="text-white inter font-semibold py-5 text-xl">
            {paragraph}
          </p>
          <div className="relative z-10 flex max-md:justify-center mt-5">
            <Link 
              className="group font-semibold text-xl relative mt-5 border-b-2 border-white pb-2 inline-flex items-center text-white" 
              href={`/${link.slug}`}
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
        </div>
      </div>
    </section>
  )
}

export default BigCta
