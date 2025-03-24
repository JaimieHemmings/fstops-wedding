import React from 'react'

interface PageTitleBlockProps {
  title: string
  text: string
}

const PageTitleBlock: React.FC<PageTitleBlockProps> = ({ title, text}) => {
  return (
    <section className="flex flex-col md:flex-row pb-[3rem]">
      <div className="container">
        <h1 className="font-bold text-7xl pb-[3rem]">
          {title}
        </h1>
        <p className="text-3xl font-semibold">
          {text}
        </p>
      </div>
    </section>
  )
}

export default PageTitleBlock
