'use client'
import React from 'react'

import type { Header } from '@/payload-types'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {

  return (
    <HeaderNav data={data} />
  )
}
