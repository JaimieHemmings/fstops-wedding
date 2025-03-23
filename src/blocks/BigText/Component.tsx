import React from 'react'

interface ComponentProps {
  text: string
}

export const Component: React.FC<ComponentProps> = ({ text }) => {
  return (
    <div>
      {text}
    </div>
  )
}
