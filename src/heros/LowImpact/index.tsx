import React from 'react'

import type { Page } from '@/payload-types'
import Overlay from '../Components/Overlay'
import { Media } from '@/components/Media'

export const LowImpactHero: React.FC<Page['hero']> = ({ media, subtitle, highlightText }) => {
  return (
    <div className="h-[40vh] relative w-full">
      <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
      <Overlay title={''} subtitle={subtitle} highlightText={highlightText} />
    </div>
  )
}
