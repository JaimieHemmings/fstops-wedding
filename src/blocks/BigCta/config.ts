import type { Block } from 'payload'

export const BigCtaBlock: Block = {
  slug: 'bigCta',
  interfaceName: 'bigCtablock',
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',    
      required: true,  
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title', 
      required: true,

    },
    {
      name: 'paragraph',
      type: 'textarea',
      label: 'Paragraph', 
      required: true,
    },
    {
      name: 'link',
      relationTo: 'pages',
      type: 'relationship',
      label: 'Link',
    },
  ],
}
