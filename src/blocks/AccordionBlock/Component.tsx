import { Media } from '@/components/Media'
import Link from 'next/link'
import React from 'react'
import Accordion from './Client'
interface AccordionBlockProps {
  image: any
  title: string
  content: string
  link: any
  linkLabel: string
  questionsTitle: string
  questions: Question[]
}

interface Question {
  question: string
  answer: string
}

const AccordianBlock: React.FC<AccordionBlockProps> = (
  {
    image,
    title,
    content,
    link,
    linkLabel,
    questionsTitle,
    questions
  }
) => {
  return (
    <section className="py-[5rem]">
      <div className="container mx-auto p-3 pb-[5rem]">
        <div className="w-full border-t-[2px] border-jet pt-3 flex flex-row justify-between">
          <h2 className="font-semibold text-xl">
            FAQ
          </h2>
          <p className="font-semibold text-xl">03</p>
        </div>
      </div>
      <div className="container mx-auto md:flex flex-row justify-between gap-8">
        <div className="basis-1/3 flex flex-col justify-between">
          <div>
            <div className="flex flex-row justify-start pb-5">
              <div className="px-3">
                <Media
                  resource={image}
                  imgClassName='w-24 h-24 rounded-md object-cover'
                  loading='lazy'
                />
              </div>
              <div>
                <h3 className="inter font-semibold text-3xl">
                  FStops
                </h3>
                <p className="opacity-[0.6] font-semibold inter text-base">
                  Professional Photography
                </p>
              </div>
            </div>
            <h3 className="font-semibold pb-3 text-xl">
              {title}
            </h3>
            <p className="opacity-[0.6] font-semibold text-base">
              {content}
            </p>
          </div>
          <div className="mt-5">
          <Link 
          className="group font-semibold text-xl relative mt-5 border-b-2 border-jet pb-2 inline-flex items-center" 
          href={`/${link.slug}`}
        >
          {linkLabel || "Learn More" }
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
        <div className="basis-2/3 max-md:pt-5 max-md:mt-5 p-3">
          <h2 className="inter text-4xl md:text-6xl font-semibold pb-5 mb-5">
            {questionsTitle}
          </h2>
          <Accordion questions={questions} />
        </div>
      </div>
    </section>
  )
}

export default AccordianBlock
