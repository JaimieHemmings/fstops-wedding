import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  defaultPopulate: {
    profileImage: true,
    quote: true,
    name: true,
  },
  fields: [
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      maxLength: 130,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
