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
      name: 'learnMoreLink',
      relationTo: 'pages',
      type: 'relationship',
      required: true,
    },
    {
      name: 'ctaImage',
      type: 'upload',
      relationTo: 'media',
      required: true,

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
    {
      name: 'ctaLink',
      relationTo: 'pages',
      type: 'relationship',
      required: true,
    },
  ],
}
