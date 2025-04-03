import { Media } from '@/components/Media'
import Image from 'next/image'
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
      <div className="container bg-[#dce2e0] drop-shadow-lg rounded-lg p-5 py-[3rem] mt-10  relative overflow-hidden">
        <Image
          src="/floral-bg.webp"
          alt="Floral background"
          width={0}
          height={0}
          className="w-full h-full top-0 left-0 object-cover absolute -z-10 opacity-40 mix-blend-multiply"
        />
        <header className="flex flex-col gap-2 items-center mb-5 text-center">
          <h3 className="uppercase opacity-60 text-md tracking-widest">
            {title}
          </h3>
          <p className="tracking-widest text-xl opacity-80 uppercase">
            {subtitle}
          </p>
        </header>
        <div className="flex flex-col gap-5 md:flex-row items-stretch justify-between py-[1rem] text-center">
          {packages.map((pkg, i) => (
            <div key={i} className="flex flex-col w-1/3 bg-white">
              <div className="h-[400px]">
                <Media
                  resource={pkg.packageImage}
                  className="w-full h-full object-cover m-0 p-0"
                  imgClassName="w-full h-full object-cover m-0 p-0"
                />
              </div>
              <div className="bg-white pb-3 flex flex-col flex-1 border-t-[16px] border-[#dce2e0]">
                <h4 className="text-xl mt-3">
                  {pkg.packageName}
                </h4>
                <p className="opacity-70 text-sm p-3 prose md:prose-md flex-1">
                  {pkg.description}
                </p>
                <p className="text-xl mt-auto">
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
