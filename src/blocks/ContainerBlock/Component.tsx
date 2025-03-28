import React from 'react'
import PageTitleBlock from '../PageTitle/Component'
import FullWidthImageBlock from '../FullWidthImage/Component'
import TwoColumnTextBlock from '../TwoColumnTextBlock/Component'
import FullWidthTextBlock from '../FullWidthText/Component'
import { Media } from '@/components/Media'
import Link from 'next/link'

interface ContainerBlockProps {
  title: string
  image: any
  subtitle: string
  blocks: any
  link: any
  linkLabel: string
}

const blockComponents = {
  pageTitleBlock: PageTitleBlock,
  fullWidthImageBlock: FullWidthImageBlock,
  twoColumnTextBlock: TwoColumnTextBlock,
  fullWidthTextBlock: FullWidthTextBlock,
}

const ContainerBlock: React.FC<ContainerBlockProps> = ({title, image, subtitle, blocks, link, linkLabel}) => {
  return (
    <section className="py-[3rem] flex flex-col md:flex-row container mx-auto p-3 pt-[5rem] relative">
      <div className="basis-1/4 relative max-md:mb-5">
        <div className="md:sticky top-[1rem]">
          <div className="flex flex-row justify-start">
            <div className="basis-1/5">
              <Media
                resource={image}
                imgClassName="w-[56px] h-auto rounded-xl"
              />
            </div>
            <div className="basis-4/5 max-md px-3">
              <h2 className="font-semibold text-xl pb-1">
                {title}
              </h2>
              <p className="font-semibold text-xl opacity-[0.6]">
                {subtitle}
              </p>
            </div>
          </div>
          <div className="py-5">
            {link && (
              <Link 
                className="group font-semibold text-base relative mt-5 border-b-2 border-jet pb-2 inline-flex items-center" 
                href={`/${link.slug}`}
              >
                {linkLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="ml-3 transition-all duration-300 ease-in-out group-hover:ml-5"
                  style={{
                    width: '30px',
                    height: '30px',
                    fill: 'currentColor',
                    flexShrink: 0
                  }}
                  focusable="false"
                >
                  <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="basis-3/4">
      {/* @ts-expect-error there may be some mismatch between the expected types here */}
        {blocks.map((block, index) => {
            const { blockType } = block

            if (blockType && blockType in blockComponents) {
              {/* @ts-expect-error there may be some mismatch between the expected types here */}
              const Block = blockComponents[blockType]

              if (Block) {
                return (
                  <div key={index}>
                    <Block {...block} disableInnerContainer />
                  </div>
                )
              }
            }
            return null
          })}
      </div>
    </section>
  )
}

export default ContainerBlock
