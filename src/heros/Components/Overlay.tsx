import React from 'react'
import CornerBorders from '../Components/CornerBorders'
import CrossHair from '../Components/CrossHair'

interface OverlayProps {
  title: string | null | undefined
  subtitle: string | null | undefined
  highlightText: string | null | undefined
}

const Overlay:React.FC<OverlayProps> = ({title, subtitle, highlightText}) => {
  return (
    <div className="content bg-[#111111]/40 absolute z-20 w-full top-0 left-0 text-center h-full flex flex-col justify-end py-5 pointer-events-none">
      <CrossHair />
      <CornerBorders />
      <h2 className="font-semibold text-xl md:text-2xl leading-4 mb-4 text-white">
        {title}
      </h2>
      <p className="text-5xl md:text-8xl text-white mb-[3rem] leading-[0.8] font-bold mt-1 uppercase">
        {subtitle}      
        <span className="playfair-display text-4xl md:text-6xl mt-1 block italic text-gold">
          {highlightText}
        </span>
      </p>
    </div>
  )
}

export default Overlay
