'use client';
import { Media } from '@/components/Media';
import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa6";

interface TestimonialsClientProps {
  reviews: {
    name: string
    quote: string
    profileImage: any
    id: number
  }[]
}

const TestimonialsClient: React.FC<TestimonialsClientProps> = ({ reviews }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full py-3">
      <div className="container mx-auto flex flex-col justify-around py-[5rem]">
        <div className="w-full border-t-2 pt-3 flex flex-row justify-between">
          <h2 className="inter font-semibold text-xl"> Testimonials</h2>
          <p className="inter font-semibold text-xl">02</p>
        </div>
        <div className="block md:flex flex-row pt-20 h-full">
          <div className="basis-1/3 flex flex-col justify-between">
            <h3 className="inter opacity-[0.6] font-semibold text-2xl max-w-[500px]">
              Here's what people have to say about working together. Real moments, real experiences, real feedback.
            </h3>
          </div>
          <div className="basis-2/3 px-5 relative min-h-[400px] overflow-hidden max-md:mt-10">
            <div className="relative w-full h-full">
              {reviews.map((testimonial, index: number) => (
                <div 
                  key={index}
                  className={`slide absolute top-0 left-0 w-full transition-all duration-500 ease-in-out md:pl-10 ${
                    index === current 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="relative mb-10">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 349.078 349.078"
                      className="absolute left-0 top-0"
                      fill="#cdcdcd"
                    >
                      <path d="M150.299,26.634v58.25c0,7.9-6.404,14.301-14.304,14.301c-28.186,0-43.518,28.909-45.643,85.966h45.643
                        c7.9,0,14.304,6.407,14.304,14.304v122.992c0,7.896-6.404,14.298-14.304,14.298H14.301C6.398,336.745,0,330.338,0,322.447V199.455
                        c0-27.352,2.754-52.452,8.183-74.611c5.568-22.721,14.115-42.587,25.396-59.048c11.608-16.917,26.128-30.192,43.16-39.44
                        C93.886,17.052,113.826,12.333,136,12.333C143.895,12.333,150.299,18.734,150.299,26.634z M334.773,99.186
                        c7.896,0,14.305-6.407,14.305-14.301v-58.25c0-7.9-6.408-14.301-14.305-14.301c-22.165,0-42.108,4.72-59.249,14.023
                        c-17.035,9.248-31.563,22.523-43.173,39.44c-11.277,16.461-19.824,36.328-25.393,59.054c-5.426,22.166-8.18,47.266-8.18,74.605
                        v122.992c0,7.896,6.406,14.298,14.304,14.298h121.69c7.896,0,14.299-6.407,14.299-14.298V199.455
                        c0-7.896-6.402-14.304-14.299-14.304h-44.992C291.873,128.095,306.981,99.186,334.773,99.186z"
                      />
                    </svg>
                    <p className="font-bold text-2xl md:text-5xl relative indent-20 max-md:pt-5 leading-normal">
                      {testimonial.quote}
                    </p>
                  </div>
                  
                  <div className="flex flex-row justify-start mt-auto">
                    <Media
                      className="w-10 h-10 rounded-full"
                      imgClassName="rounded-full"
                      loading='lazy'
                      resource={testimonial.profileImage}
                    />
                    <div className="author">
                      <p className="inter font-semibold text-base">
                        <span className="px-5">
                          5/5
                          <span className="ml-2 relative -top-[2px]">
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                          </span>
                        </span>
                      </p>
                      <p className="opacity-[0.6] inter text-base font-semibold px-5">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsClient
