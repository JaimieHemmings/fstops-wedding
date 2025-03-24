import React from 'react'
import configPromise from '@payload-config';
import {getPayload } from 'payload';
import { Media } from '@/components/Media';
import { FaStar } from "react-icons/fa6";

export const dynamic = 'force-static';
export const revalidate = 600;

export default async function SingleReview() {
  const payload = await getPayload({ config: configPromise });
  const response = await payload.find({
    collection: 'reviews',
    depth: 1,
    limit: 1,
    select: {
      name: true,
      quote: true,
      profileImage: true,
    }
  })
  const { docs } = response;

  return (
    <>
    {docs.map((doc, index) => (
      <div key={index} className="w-full flex flex-row justify-between">
        <div className="min-w-[50px]">
          <Media
            className="w-full h-auto mb-3"
            imgClassName="rounded-full"
            loading='lazy'
            resource={doc.profileImage}
          />
        </div>
        <div className="pl-3">
          <p className="font-semibold text-sm leading-4 mb-3">
            5/5
            <span className="ml-2 relative -top-[2px]">
              <FaStar className="inline-block" />
              <FaStar className="inline-block" />
              <FaStar className="inline-block" />
              <FaStar className="inline-block" />
              <FaStar className="inline-block" />
            </span>
          </p>
          <p className="pb-3 text-base opacity-[0.6]">
            {doc.quote}
          </p>
          <p className="pb-3 text-base">
            {doc.name}
          </p>
        </div>
      </div>
    ))}
    </>
  )
}
