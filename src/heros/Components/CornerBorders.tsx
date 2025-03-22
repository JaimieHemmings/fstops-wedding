import React from 'react'

const CornerBorders = () => {
  return (
    <>
    <div className="absolute top-8 left-8">
      <div className="w-6 h-1 bg-white/80" />
      <div className="w-1 h-6 bg-white/80" />
    </div>
    <div className="absolute top-8 right-8">
      <div className="w-6 h-1 bg-white/80" />
      <div className="w-1 h-6 bg-white/80 absolute right-0 top-0" />
    </div>
    <div className="absolute bottom-8 left-8">
      <div className="w-6 h-1 bg-white/80 absolute bottom-0" />
      <div className="w-1 h-6 bg-white/80 absolute bottom-0" />
    </div>
    <div className="absolute bottom-8 right-8">
      <div className="w-6 h-1 bg-white/80 absolute bottom-0 right-0" />
      <div className="w-1 h-6 bg-white/80 absolute right-0 bottom-0" />
    </div>
    </>
  )
}

export default CornerBorders
