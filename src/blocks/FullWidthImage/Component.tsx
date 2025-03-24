import { Media } from '@/components/Media'
import React from 'react'

interface FullWidthImageBlockProps {
  image: any
}

const FullWidthImageBlock:React.FC<FullWidthImageBlockProps> = ({ image }) => {
  return (
    <div className="container pb-[3rem]">
      <Media
        resource={image}
        imgClassName="w-full h-auto rounded-xl"
        loading='lazy'
      />      
    </div>
  )
}

export default FullWidthImageBlock
