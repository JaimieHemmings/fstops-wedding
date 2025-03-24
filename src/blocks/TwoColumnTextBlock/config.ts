import type { Block } from 'payload'

export const TwoColumnTextBlock: Block = {
  slug: 'twoColumnTextBlock',
  interfaceName: 'TwoColumnTextBlock',
  fields: [
    {
      name: 'textLeft',
      type: 'textarea',
      required: true,
    },
    {
      name: 'textRight',
      type: 'textarea',
      required: true,
    },
  ],
}
