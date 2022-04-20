import React from 'react'
import Image from 'next/image'
import ad from './../../../assets/images/ads/fidis_ad1.jpeg'
const Ad1 = () => {
  return (
    <div className="col-span-3 flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-black/20 shadow-sm">
      <Image
        className="object-cover object-right"
        src={ad}
        height={400}
        width={300}
      />
    </div>
  )
}

export default Ad1
