import React from 'react'
import configPromise from '@payload-config';
import {getPayload } from 'payload';
import TestimonialsClient from './Client';

export const dynamic = 'force-static';
export const revalidate = 600;

export default async function Testimonials() {
  const payload = await getPayload({ config: configPromise });
  const response = await payload.find({
    collection: 'reviews',
    depth: 1,
    limit: 5,
    select: {
      name: true,
      quote: true,
      profileImage: true,
    }
  })
  const { docs } = response;
  return (
    <TestimonialsClient reviews={docs} />
  )
}
