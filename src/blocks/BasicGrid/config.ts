import type { Block } from 'payload'

export const BasicGridBlock: Block = {
  slug: 'basicGridBlock',
  interfaceName: 'BasicGridBlock',
  fields: [
    {
      name: 'intro',
      type: 'textarea',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    {
      name: 'ctaImage',
      type: 'upload',
      relationTo: 'media',

    },
    {
      name: 'ctaTitle',
      label: 'CTA Title',
      type: 'text',
      required: true,
    },
    {
      name: 'ctaText',
      type: 'textarea',
      required: true,
    },
  ],
}
