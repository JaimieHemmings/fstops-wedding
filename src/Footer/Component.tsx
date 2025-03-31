import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'
import { Media } from '@/components/Media'
import Image from 'next/image'

export async function Footer() {
  // @ts-expect-error
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="center-bg-img dark-overlay relative py-5">
      <Media
        fill
        resource={footerData.backgroundImage}
        imgClassName="absolute inset-0 z-0 object-cover"
      />
      <div className="bg-jet/60 absolute top-0 left-0 w-full h-full z-[1]" />
      <div className="py-[5rem] container mx-auto relative z-10 flex flex-col md:flex-row justify-between">
        <div className="basis-1/4 p-3 max-md:pt-[3rem]">
          <p className="inter text-white font-semibold pb-5 text-base opacity-[0.6]">
            {footerData.introText}
          </p>
          <p className="inter text-white text-2xl font-semibold">
            {footerData.boldText}
          </p>
        </div>
        <div className="basis-1/2 p-3">
          <h2 className="mb-5 uppercase text-white text-xl inter font-bold opacity-[0.6]">Lets Talk</h2>
          <p>
            <a
              href="tel:tel:07712291162"
              className="text-white font-semibold text-2xl inter pt-5">
                07712 291 162
              </a>
          </p>
          <p className="pt-5">
            <a href="mailto:hello@fstops.co.uk" className="text-white font-semibold text-2xl inter pt-5 underline">
            hello@fstops.co.uk
            </a>
          </p>
          <p className="opacity-[0.6] inter text-md text-white mt-5">
            Photographer
          </p>
          <p className="inter text-md text-white font-semibold">
            (Based in Cornwall)
          </p>
        </div>
        <div className="basis-1/4 p-3 max-md:py-[2rem]">
          <ul>
            {navItems &&
              navItems.length > 0 && (
                navItems.map((item, index) => (
                  <li key={index} className="py-2">
                    <Link
                      className="text-white text-2xl font-bold"
                      // @ts-expect-error
                      href={`/${item.link.reference?.value?.slug} || ''`}
                    >
                      {item.link.label}
                    </Link>
                  </li>
                )
              )
            )}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between container mx-auto p-3 relative z-10">
        <div className="basis-2/3 p-3">
          <Image
            src="/logo.png"
            alt="FStops Wedding Photography Logo"
            width={700}
            height={200}
            className="invert w-full h-auto"
          />
        </div>
        <div className="basis-1/3 p-3 flex flex-col justify-end">
          {footerData.instagramLink && (
            <Link 
              className="group font-semibold text-xl relative mt-5 border-b-2 border-white pb-2 inline-flex items-center text-white" 
              href={footerData.instagramLink} target="_blank"
            >
              Instagram
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="ml-3 transition-all duration-300 ease-in-out group-hover:ml-10"
                style={{
                  width: '30px',
                  height: '30px',
                  fill: 'currentColor',
                  flexShrink: 0
                }}
                focusable="false"
              >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
              </svg>
            </Link>
          )}
          <p className="text-white opacity-[0.6] inter text-md pt-[3rem]">© 2024 FStops. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
