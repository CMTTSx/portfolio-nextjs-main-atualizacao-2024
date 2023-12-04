import React from 'react'
import Image from 'next/image'

import Image1 from '../../../public/images/manutencao-tchauzinho.gif'

function FixSiteImage() {
  return (
    <div className=' w-full ' >
        <Image src={Image1} alt="Fix Site Image" className='mx-auto My-auto w-[50rem] ' />
    </div>
  )
}

export default FixSiteImage