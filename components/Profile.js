import React from 'react';

import Image from 'next/image';

import Myphoto from '../public/img/meee.jpeg'

export default function Profile() {
  return (
    <div>
      <div className='flex z-0 justify-end  sm:w-[10em] sm:ml-auto sm:mr-auto sm2:ml-auto sm3:ml-auto md:ml-auto md:w-[12em] lg:mr-[14em] mt-[10em] xl:justify-end ' >
        <Image src={Myphoto} alt="myphoto" className=' rounded-full z-0 ' width='250px' height='250px' />
      </div>
      <h1 className='flex justify-center sm:text-[28px] sm:mt-5 text-6xl xl:text-6xl xl:ml-5 xl:mt-[-1em] font-[700] mt-[-1em] mb-5 lg:mr-[6em] lg:mt-[-2em] md:text-4xl md:mt-[1em] md:mr-[-0.2em] text-[rgba(83,218,0,0.9)] ' >CALIL SOUSA MATTOS</h1>
      <h2 className='flex justify-center text-4xl mr-[9em] sm:ml-[1em] sm:text-[21px] xl:mr-[4em] xl:text-[2em] sm:mr-10 text-justify font-italic lg:ml-[-7em] lg:text-2xl md:ml-[2em]' >Desenvolvedor Fullstack Web e Mobile</h2>
      <p className='flex text-justify text-lg mt-10 ml-10 mr-10 mb-20 font-[italic] xl:ml-[6em]  ' >“Desenvolvedor que atua de ponta-a-ponta desde o Front-End, Banco de Dados, Back-End e Mobile. Sempre alinhando os estudos de novas tecnologias, vindo a aplicar todos os conceitos aprendidos em seus sistemas e aplicações. ”</p>

    </div>
  );
}