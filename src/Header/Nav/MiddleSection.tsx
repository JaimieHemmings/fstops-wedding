import React from 'react'

const MiddleSection = () => {
  return (
    <div className="flex items-center justify-between gap-4 inter">
      <div className="px-5 max-md:hidden">
        <p className="font-semibold text-sm pb-2 inter">Photographer</p>
        <p className="font-semibold opacity-[0.6] text-sm inter">(Based in Cornwall)</p>
      </div>
      <div className="px-5">
        <p className="font-semibold text-sm pb-2 relative">
          <a href="tel:07712291162" className="transition-all inter">
            07712 291 162
          </a>
        </p>
        <p className="font-semibold text-sm">
          <a href="/cdn-cgi/l/email-protection#9cf4f9f0f0f3dcfaefe8f3ecefb2fff3b2e9f7" className="transition-all inter">
            <span className="__cf_email__" data-cfemail="69010c050506290f1a1d06191a470a06471c02">[email&#160;protected]</span>
          </a>
        </p>
      </div>
      <div className="px-5 max-md:hidden">
        <a href="https://www.instagram.com/fstopsphotography" target="_blank" className="animate-arr flex justify-between align-items-baseline font-semibold inter">
          Instagram
          <span className="inline-block h-[20px] w-[20px] pl-1 relative">
          </span>
        </a>
      </div>
    </div>
  )
}

export default MiddleSection
