import type { Block } from 'payload'

export const MosaicGalleryBlock: Block = {
  slug: 'mosaicGalleryBlock',
  interfaceName: 'MosaicGalleryBlock',
  fields: [
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      label: 'Images',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      admin: {
        description: 'Drag and drop to reorder images',
      },
    }
  ],
}