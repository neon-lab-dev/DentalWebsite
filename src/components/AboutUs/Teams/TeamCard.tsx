import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'

const TeamCard = () => {
  return (
    <div >
      <Image src={IMAGES.teamsimg} alt="Card Image" className=" rounded-[32px] " />
    </div>
  )
}

export default TeamCard
