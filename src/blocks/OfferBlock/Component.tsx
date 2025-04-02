import { Media } from '@/components/Media'
import Link from 'next/link'
import React from 'react'

interface OfferBlockProps {
  title: string
  subtitle: string
  link: any
  services: service[]
  backgroundImage: any
  linkLabel: string
}

interface service {
  service: string
  shortDescription: string
  icon: any
}

const OfferBlock: React.FC<OfferBlockProps> = ({backgroundImage, title, subtitle, link, linkLabel, services}) => {
  return (
    <section className="bg-off-black offer-bg relative">
      <div className="absolute top-0 left-0 w-full h-full bg-jet/60">
        <Media
          fill
          imgClassName="object-cover grayscale"
          loading='lazy'
          resource={backgroundImage}
        />
        <div className="absolute top-0 left-0 bg-jet/60 w-full h-full" />
      </div>
      <div className="w-full h-full bg-jet/60">
        <div className="container min-h-screen mx-auto flex max-md:flex-col md:flex-row justify-between items-stretch py-[5rem] md:py-[10rem] relative z-10 p-3">
          <div className="flex flex-col justify-between basis-1/2">
            <div>
              <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold">
                {title}
              </h2>
              <p className="text-white py-3 md:py-[3rem] text-2xl md:text-3xl lg:max-w-[50%] opacity-[0.6]">
                {subtitle}
              </p>
            </div>
            <div>
            <Link 
              className="group font-semibold text-xl relative mt-5 border-b-2 border-white pb-2 inline-flex items-center text-white" 
              href={`/${link.slug}`}
            >
              {linkLabel || "Check Out My Work" }
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
          <div className="basis-1/2 flex flex-col bl-white bb-white p-5 justify-around">
            <div className="flex-col md:flex-row flex-wrap flex justify-around">
              
              <div className="basis-1/2 flex flex-col border-l-[1px] border-white/20 py-10 max-md:hidden">
              </div>
              <div className="basis-1/2 max-md:hidden border-l-[1px] border-white/20" />
              {services.map((service, i) => {
                return (
                  <React.Fragment key={i}>
                  {i == 3 && (
                    <div className="max-md:hidden md:basis-1/2 border-l-[1px] border-white/20" />
                  )}
                  <div
                    className={`md:basis-1/2 flex flex-col p-5 justify-around border-t-[1px]' : ''} border-l-[1px] border-b-[1px] border-white/20`}
                  >
                    <div className="flex flex-row justify-between">
                      <div className="basis-1/2">
                        <Media
                          className="w-[60px] h-[60px]"
                          imgClassName="rounded-lg w-full h-full object-cover"
                          loading='lazy'
                          resource={service.icon}
                        />
                      </div>
                      <div className="basis-1/2 justify-end">
                        <p className="text-white opacity-[0.6] text-xl font-2xl font-semibold flex justify-end">0{i+1}</p>
                      </div>
                    </div>
                    <div className="pt-3">
                      <h3 className="text-white font-semibold text-2xl">{service.service}</h3>
                      <p className="text-white opacity-[0.6] inter pt-2 text-base min-h-[60px]">{service.shortDescription}</p>
                    </div>
                  </div>
                  {i == 0 && (
                    <div className="basis-1/2 border-b-[1px] border-l-[1px] border-white/20 max-md:hidden" />
                  )}
                  </React.Fragment>
                )
              })}
              <div className="max-md:hidden basis-1/2" />
              <div className="max-md:hidden basis-1/2 flex flex-col border-l-[1px] border-r-[1px] border-white/20 py-10">
              </div>
            </div>




          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferBlock
