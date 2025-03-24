'use client'
import React, { useState } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import MiddleSection from './MiddleSection'
import Image from 'next/image'
import Hamburger from 'hamburger-react'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <section className="w-full relative z-50 p-1 pt-3 px-5 bg-white">
      <div
        className="w-full flex flex-row items-center justify-between mx-auto p-4 z-20"
      >
        <div className="basis-1/2 md:basis-1/3">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="FStops Photography"
            width={700}
            height={150}
            className="w-full h-auto"
          />
        </Link>
        </div>
        <div className="max-md:hidden basis-1/3">
          <MiddleSection />
        </div>
        <div className="basis-1/2 md:basis-1/3">
          <div className="w-auto flex justify-end">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
    </section>
    <nav className={`absolute nav-container w-full min-h-screen md:h-[60vh] top-0 z-40 bg-jet ${isOpen ? 'flex' : 'hidden'} transition-all duration-300`}>
      <div className="container mx-auto h-full flex justify-between align-items-center">
        <div className="hidden md:flex flex-col justify-around p-3 basis-1/2">
          <h2 className="text-white text-5xl font-bold uppercase pb-0 p-5">FStops Photography</h2>
        </div>
        <div className="h-full md:basis-1/2 flex flex-col justify-center max-md:min-h-screen max-md:w-full">
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} appearance="link" className="text-xl max-md:block text-center font-semibold hover:no-underline no-underline py-3" />
          })}
        </div>
      </div>
    </nav>
  </>
  )
}
