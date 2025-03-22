import React from 'react'
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
export const MediumImpactHero: React.FC<HighImpactHeroProps> = ({ leadText, highlightText, title, images }) => {
  return (
    <div className="">
      <div className="container mb-8">

      </div>
      <div className="container ">
      </div>
    </div>
  )
}
