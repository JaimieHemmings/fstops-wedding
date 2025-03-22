import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'leadText',
      type: 'text',
      required: true,
    },
    {
      name: 'highlightText',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'media',
    //   type: 'upload',
    //   admin: {
    //     condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
    //   },
    //   relationTo: 'media',
    //   required: true,
    // },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    }
  ],
  label: false,
}
