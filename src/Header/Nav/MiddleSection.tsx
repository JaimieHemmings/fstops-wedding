import React from 'react'

const MiddleSection = () => {
  return (
    <div className="flex items-center justify-center gap-4 inter px-1">
      <div>
        <p className="font-semibold text-sm pb-1 relative">
          <a href="tel:07712291162" className="transition-all inter">
            07712 291 162
          </a>
        </p>
        <p className="font-semibold text-sm">
          <a href="mailto:hello@fstops.co.uk" className="transition-all">
              hello@fstops.co.uk
          </a>
        </p>
      </div>
    </div>
  )
}

export default MiddleSection
