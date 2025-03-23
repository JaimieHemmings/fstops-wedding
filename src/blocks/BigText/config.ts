import type { Block } from 'payload'

export const BigTextBlock: Block = {
  slug: 'bigTextBlock',
  interfaceName: 'BigTextBlock',
  fields: [
    {
      name: 'text',
      type: 'text',
      label: 'Text',
      required: true,
    },
  ],
  labels: {
    plural: 'Big Text Blocks',
    singular: 'Big Text Block',
  },
}
