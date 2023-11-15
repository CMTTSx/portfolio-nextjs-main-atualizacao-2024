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
    <div className='w-full overflow-x-hidden '>

      <div className=' sm:mt-[10rem] lg:mt-[8rem] '>
        <Image className='flex sm:mx-[6.5rem] sm2:mx-[8.8rem] sm360:ml-[8rem] sm4:mx-[9.7rem] md:mx-[18em] md:w-[13rem] lg:mx-[47em] sm:w-[10rem] lg:w-[10rem] 2xl:w-[15rem] xl:ml-[60rem] 2xl:ml-[90rem] 2xl:mt-[15rem] ' src={profilePIC} alt='profilePIC' />
      </div>

      <div className=' sm:mt-[3rem] lg:mt-[-6rem] lg:pb-[2rem] '>
        <p className=" sm:text-xl lg:text-3xl lg:pt-[-5rem] sm:ml-[5rem] sm2:ml-[6.9rem] sm360:ml-[6.5rem] sm4:ml-[8rem] md:ml-[17rem] lg:ml-[-5rem] md:text-2xl 2xl:text-5xl lg:px-[18rem] xl:ml-[5rem] 2xl:ml-[13rem] 2xl:mt-[-10rem] text-left text-[#53DA00E6] font-bold ">CALIL SOUSA MATTOS</p>
        <p className=" lg:text-xl lg:pt-1 sm:ml-[5.1rem] sm2:ml-[7rem] sm360:ml-[6.5rem] sm4:ml-[8.1rem] md:text-lg md:ml-[17.5rem] lg:ml-[-6.1rem] lg:px-[21rem] xl:px-[30.5rem] 2xl:text-2xl 2xl:ml-[7rem] lg:text-left font-bold ">Desenvolvedor de Software</p>
        <div className={irish.className}>
          <p className="lg:text-md sm:pt-10 lg:pt-8 sm:ml-[5rem] md:ml-[7rem] md:mr-[4rem] sm:mr-[1rem] lg:ml-[10rem] 2xl:text-2xl 2xl:ml-[15rem] 2xl:mr-[40rem] lg:mr-[25rem] text-justify font-bold font-irish text-[#363537]  ">Crio e desenvolvo design de produtos digitais como Sistemas,
            Lojas Virtuais, Landing Pages, Sites e Aplicativos. Atualmente atuo criando produtos baseado em human-centered.</p>
        </div>
      </div>


    </div>
  )
}

export default Profile