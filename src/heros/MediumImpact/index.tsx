import React from 'react'

import type { Page } from '@/payload-types'

export const MediumImpactHero: React.FC<Page['hero']> = ({ title, video, subtitle, highlightText }) => {
  return (
    <div className="">
      <div className="container mb-8">
        {title}
        {subtitle}
        {highlightText}
      </div>
      <div className="container ">
      </div>
    </div>
  )
}
