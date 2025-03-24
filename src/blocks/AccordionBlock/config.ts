import type { Block } from 'payload'

export const AccordionBlock: Block = {
  slug: 'accordionBlock',
  interfaceName: 'AccordionBlock',
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'textarea',
    },
    {
      name: 'link',
      label: 'Link',
      relationTo: 'pages',
      type: 'relationship',
    },
    {
      name: 'linkLabel',
      label: 'Link Label',
      type: 'text',
    },
    {
      name: 'questionsTitle',
      label: 'Questions Title',
      type: 'text',
    },
    {
      name: 'questions',
      label: 'Questions',
      type: 'array',
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'textarea',
        },
      ]
    }
  ],
}
