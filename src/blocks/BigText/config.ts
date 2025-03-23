import type { Block } from 'payload'

export const BigTextBlock: Block = {
  slug: 'bigTextBlock',
  interfaceName: 'BigTextblock',
  fields: [
    {
      name: 'text',
      type: 'textarea',
      label: 'Text',
      required: true,
    },
  ],
}
