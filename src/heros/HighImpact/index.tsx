'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import CornerBorders from '../Components/CornerBorders'
import CrossHair from '../Components/CrossHair'

interface HighImpactHeroProps {
  title: string
  leadText: string
  highlightText: string
  images: Array<{
    image: {
      url: string
      alt: string
    }
  }>
}

export const HighImpactHero: React.FC<HighImpactHeroProps> = ({ 
  leadText, highlightText, title, images
}) => {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    dragFree: false,
  }, [Autoplay({ delay: 5000 })])
  return (
    <div className="embla relative w-screen h-[80vh] overflow-hidden" ref={emblaRef}>
      <div className="embla__container h-full flex">
          {images?.map((image, index:number) => (
          <div key={index} className="embla__slide relative flex-[0_0_100%] min-w-0">
            <div className="embla__slide__inner">
              <Image 
                src={image.image.url} 
                alt={image.image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
          ))}
      </div>
      <div className="content bg-[#111111]/40 absolute z-20 w-full top-0 left-0 text-center h-full flex flex-col justify-end py-5 pointer-events-none">
        <CrossHair />
        <CornerBorders />
        <h2 className="font-semibold text-xl md:text-2xl leading-4 mb-4 text-white">
          {title}
        </h2>
        <p className="text-5xl md:text-8xl text-white mb-[3rem] leading-[0.8] font-bold mt-1 uppercase">
          {leadText}       
          <span className="playfair-display text-4xl md:text-6xl mt-1 block italic text-gold">
            {highlightText}
          </span>
        </p>
      </div>
    </div>
  )
}
