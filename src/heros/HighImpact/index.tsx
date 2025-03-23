'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import Overlay from '../Components/Overlay'

export const HighImpactHero: React.FC<Page['hero']> = ({ title, subtitle, highlightText, images }) => {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    dragFree: false,

  }, [Autoplay({ delay: 5000 })])
  return (
    <div className="embla relative w-screen h-[80vh] overflow-hidden" ref={emblaRef}>
      <div className="embla__container h-full flex">
        {images?.map((image: any, index: number) => (
          <div key={index} className="embla__slide relative flex-[0_0_100%] min-w-0">
            <Media fill imgClassName="-z-10 object-cover" priority resource={image.image} />
          </div>
        ))}
      </div>
      <Overlay title={title} subtitle={subtitle} highlightText={highlightText} />
    </div>
  )
}
