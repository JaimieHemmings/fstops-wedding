import React from 'react'

import type { Page } from '@/payload-types'

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

export const LowImpactHero: React.FC<HighImpactHeroProps> = ({ leadText, highlightText, title, images }) => {
  return (
    <div className="container mt-16">
      <div className="max-w-[48rem]">
        
      </div>
    </div>
  )
}
