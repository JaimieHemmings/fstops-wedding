import React from 'react'

interface TwoColumnTextBlockProps {
  textLeft: string
  textRight: string
}

const TwoColumnTextBlock: React.FC<TwoColumnTextBlockProps> = ({ textLeft, textRight }) => {
  return (
    <div className="container flex flex-col md:flex-row gap-4 pb-[3rem]">
      <p className="text-2xl font-semibold basis-1/3">
        {textLeft}
      </p>
      <p className="basis-2/3 inter opacity-[0.6] text-xl font-semibold">
        {textRight}
      </p>
    </div>
  )
}

export default TwoColumnTextBlock
