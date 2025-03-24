import type { Block } from 'payload'

export const FullWidthImageBlock: Block = {
  slug: 'fullWidthImageBlock',
  interfaceName: 'FullWidthImageBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
