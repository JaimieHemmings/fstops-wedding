import type { Block } from 'payload'

export const FullWidthTextBlock: Block = {
  slug: 'fullWidthTextBlock',
  interfaceName: 'FullWidthTextBlock',
  fields: [
    {
      name: 'text',
      type: 'textarea',
      label: 'Text',
      required: true,
    },
  ],
}
