import React from 'react'

const CrossHair = () => {
  return (
    <div className="bg-white/60 absolute z-30 top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[50px] h-[50px] rounded-full">
      <div className="relative w-full h-full rounded-full">
        <span className="absolute w-1 bg-white/80 h-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        <span className="absolute w-1/2 bg-white/80 h-1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      </div>
    </div>
  )
}

export default CrossHair
