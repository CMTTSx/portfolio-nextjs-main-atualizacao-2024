import React from 'react'
import Image from 'next/image'

import Image1 from '../../../public/images/Atualizada-de-Sites-e-Manutenao-de-Sites-MarketingWeb.webp'

function FixSiteImage() {
  return (
    <div>
        <Image src={Image1} alt="Fix Site Image" className='mx-auto' />
    </div>
  )
}

export default FixSiteImage