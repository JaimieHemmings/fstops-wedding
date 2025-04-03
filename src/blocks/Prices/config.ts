import type { Block } from 'payload'

export const PricesBlock: Block = {
  slug: 'pricesBlock',
  interfaceName: 'PricesBlock',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
    },
    {
      name: 'packages',
      label: 'Packages',
      type: 'array',
      fields: [
        {
          name: 'packageImage',
          label: 'Package Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'packageName',
          label: 'Package Name',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
        {
          name: 'price',
          label: 'Price',
          type: 'text',
        },
      ],
      minRows: 3,
      maxRows: 3,
      admin: {
        description: 'Add your packages here.',
      }
    },
  ],
}
