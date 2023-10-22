import React from 'react'

import { Irish_Grover } from 'next/font/google'
import { Mohave } from 'next/font/google'


import Image from 'next/image'
import profilePIC from 'public/images/Foto_perfil.svg'

const irish = Irish_Grover({
  subsets: ['latin'],
  weight: '400'
})



function Profile() {
  return (
    <div className='w-full overflow-hidden '>

      <div className=' mt-[18rem] '>
        <Image className='flex mx-[85rem] rounded-full border-4 w-[20rem] ' src={profilePIC} alt='profilePIC' />
      </div>

      <div className='mt-[-11rem] '>
        <p className="text-5xl pt-[-5rem] px-[23rem] text-left text-[#53DA00E6] font-bold ">CALIL SOUSA MATTOS</p>
        <p className="text-3xl pt-5 px-[26rem] text-left font-bold ">Desenvolvedor de Software</p>
        <div className={irish.className}>
          <p className="text-xl pt-5 ml-[15rem] mr-[50rem] text-justify font-bold font-irish text-[#363537]  ">Desenvolvo, crio e faço design de produtos digitais como Sistemas,
            Lojas Virtuais, Landing Pages, Sites e Aplicativos. Atualmente criando produtos baseado em human-centered.</p>
        </div>
      </div>


    </div>
  )
}

export default Profile