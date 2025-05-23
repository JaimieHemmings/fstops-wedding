import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import BasicGridBlock from '@/blocks/BasicGrid/Component'
import OfferBlock from '@/blocks/OfferBlock/Component'
import BigTextBlock from '@/blocks/BigText/Component'
import BigCta from './BigCta/Component'
import Testimonials from './Testimonials/Component'
import AccordionBlock from '@/blocks/AccordionBlock/Component'
import PageTitleBlock from '@/blocks/PageTitle/Component'
import FullWidthTextBlock from '@/blocks/FullWidthText/Component'
import TwoColumnTextBlock from '@/blocks/TwoColumnTextBlock/Component'
import FullWidthImageBlock from '@/blocks/FullWidthImage/Component'
import ContainerBlock from '@/blocks/ContainerBlock/Component'
import MosaicGalleryBlock from '@/blocks/MosaicGalleryBlock/Component'
import PricesBlock from '@/blocks/Prices/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  bigTextBlock: BigTextBlock,
  basicGridBlock: BasicGridBlock,
  offerBlock: OfferBlock,
  bigCta: BigCta,
  testimonials: Testimonials,
  accordionBlock: AccordionBlock,
  pageTitleBlock: PageTitleBlock,
  fullWidthTextBlock: FullWidthTextBlock,
  twoColumnTextBlock: TwoColumnTextBlock,
  fullWidthImageBlock: FullWidthImageBlock,
  containerBlock: ContainerBlock,
  mosaicGalleryBlock: MosaicGalleryBlock,
  pricesBlock: PricesBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
