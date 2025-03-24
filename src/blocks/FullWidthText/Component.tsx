import React from 'react'

interface FullWidthTextBlockProps {
  text: string
}

const FullWidthTextBlock: React.FC<FullWidthTextBlockProps> = ({ text }) => {
  return (
    <div className="container">
      <p className="text-xl font-semibold pb-[3rem]">
        {text}
      </p>
    </div>
  )
}

export default FullWidthTextBlock
