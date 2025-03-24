import type { Block } from 'payload'

export const OfferBlock: Block = {
  slug: 'offerBlock',
  interfaceName: 'OfferBlock',
  fields: [
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      label: 'Link',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    },
    {
      name: 'linkLabel',
      label: 'Link Label',
      type: 'text',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'service',
          type: 'text',
          label: 'Service',
          required: true,
        },
        {
          name: 'shortDescription',
          type: 'text',
          label: 'Short Description',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    
  ],
  labels: {
    plural: 'Offer Blocks',
    singular: 'Offer Block',
  },
}
