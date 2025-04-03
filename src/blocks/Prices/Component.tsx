import { Media } from '@/components/Media'
import React from 'react'

interface PricesBlockProps {
  title: string
  subtitle: string
  packages: {
    packageImage: string
    packageName: string
    description: string
    price: string
  }[]
}

const PricesBlock: React.FC<PricesBlockProps> = ({ title, subtitle, packages }) => {
  return (
    <section className="pb-[5rem] container">
      <div className="container bg-[#dce2e0]/60 drop-shadow-lg rounded-lg p-5 py-[3rem] mt-10">
        <header className="flex flex-col gap-2 items-center mb-5 text-center">
          <h3 className="uppercase opacity-60 text-md tracking-widest">
            {title}
          </h3>
          <p className="tracking-widest text-xl opacity-80 uppercase">
            {subtitle}
          </p>
        </header>
        <div className="flex flex-col gap-5 md:flex-row items-center justify-between py-[1rem] text-center">
          {packages.map((pkg, i) => (
          <div key={i} className="flex flex-col gap-2 basis-1/3">
            <Media
              resource={pkg.packageImage}
              className="w-full h-[400px] object-cover rounded-lg"
              imgClassName="w-full h-full object-cover rounded-lg"
            />
            <div className="bg-white pb-3">
              <h4 className="text-xl mt-3">
                {pkg.packageName}
              </h4>
              <p className="opacity-70 text-sm p-3 prose md:prose-md">
                {pkg.description}
              </p>
              <p className="text-xl">
                £ {new Intl.NumberFormat('en-GB').format(Number(pkg.price))}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricesBlock
