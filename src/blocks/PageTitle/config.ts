import type { Block } from 'payload'

export const PageTitleBlock: Block = {
  slug: 'pageTitleBlock',
  interfaceName: 'PageTitleBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'Text',
      required: true,
    },
  ],
}
