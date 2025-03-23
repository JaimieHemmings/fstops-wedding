import React from 'react'

import type { Page } from '@/payload-types'

export const LowImpactHero: React.FC<Page['hero']> = ({ media, title }) => {
  return (
    <div className="container mt-16">
      <div className="max-w-[48rem]">
      </div>
    </div>
  )
}
