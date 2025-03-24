import type { Block } from 'payload'

export const ContainerBlock: Block = {
  slug: 'containerBlock',
  interfaceName: 'ContainerBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      type: 'relationship',
      relationTo: 'pages',
    },
    {
      name: 'linkLabel',
      type: 'text',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      required: true,
      blocks: [
        {
          slug: 'pageTitleBlock',
          interfaceName: 'PageTitleBlock',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'text',
              type: 'textarea',
            }
          ]
        },
        {
          slug: 'fullWidthImageBlock',
          interfaceName: 'FullWidthImageBlock',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,            }

          ]
        },
        {
          slug: 'twoColumnTextBlock',
          interfaceName: 'TwoColumnTextBlock',
          fields: [
            {
              name: 'textLeft',
              type: 'textarea',
              required: true,
            },
            {
              name: 'textRight',
              type: 'textarea',
              required: true,
            }
          ]
        },
        {
          slug: 'fullWidthTextBlock',
          interfaceName: 'FullWidthTextBlock',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              required: true,
            }
          ]
        },
      ],
    }
    
  ],
}
