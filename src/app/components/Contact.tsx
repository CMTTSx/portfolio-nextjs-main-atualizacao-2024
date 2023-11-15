import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


//Import icons
import { BsMailbox2 } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

export default function Contact() {

  return (
    <div className=' border-[1px] ' >

      <h1 className=' sm:ml-[4rem] sm4:ml-[4rem] sm:pt-10 sm:text-2xl lg:text-4xl text-center hover:font-bold cursor-pointer ' >Entre em Contato</h1>

      <div className=' flex flex-col  sm:ml-[0.1rem] sm360:ml-5 sm2:ml-1.4 sm3:ml-[0.6rem] sm4:ml-[0.3rem] lg:ml-6 text-center mt-20 ' >
        <BsMailbox2 color='red' size={45} className='  sm:ml-[10rem] sm2:ml-[10.4rem] sm3:ml-[11.3rem] sm4:ml-[12.5rem] md:ml-[23.4rem] lg:ml-auto mr-auto ' />
        <Link href="mailto:contatocsmpm@gmail.com" className=' sm:ml-12 sm360:ml-7 lg:ml-6 lg:text-2xl hover:font-bold mb-10 ' >contatocsmpm@gmail.com</Link>
        <BsLinkedin color='blue' size={45} className=' sm:ml-[10rem] sm2:ml-[10.5rem] sm3:ml-[11.4rem] sm4:ml-[12.5rem] md:ml-[23.6em] lg:ml-auto mr-auto ' />
        <Link href="https://www.linkedin.com/in/calil-mattos-programador/" className=' sm:ml-12 sm360:ml-7 sm3:ml-9 sm4:ml-[2.8rem] lg:ml-4 lg:text-2xl hover:font-bold mb-10 ' >Linkedin</Link>
        <AiFillGithub color='black' size={45} className=' sm:ml-[10rem] sm2:ml-[10.5rem] sm3:ml-[11.3rem] sm4:ml-[12.4rem] md:ml-[23.5rem] lg:ml-auto mr-auto ' />
        <Link href="https://github.com/CMTTSx?tab=repositories" className=' sm:ml-12 sm360:ml-7 sm3:ml-[2rem] sm4:ml-[2.5rem] lg:ml-2 lg:text-2xl hover:font-bold ' >GitHub</Link>
      </div>
    </div>
  );
}