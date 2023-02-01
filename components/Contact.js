import React from 'react';

import Image from 'next/image';

import backgroundImage from '../public/img/pexels-contact.jpg'

//Import icons
import { BsMailbox2 } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

export default function Contact() {

  return (
    <div className=' border-[1px] ' >

      <h1 className=' text-4xl text-center hover:font-bold cursor-pointer ' >Entre em Contato</h1>

      <div className=' flex flex-col text-center mt-20 ' >
        <BsMailbox2 color='red' size={45} className=' ml-auto mr-auto ' />
        <a href="mailto:contatocsmpm@gmail.com" className=' text-2xl hover:font-bold mb-10 ' >contatocsmpm@gmail.com</a>
        <BsLinkedin color='blue' size={45} className='ml-auto mr-auto ' />
        <a href="https://www.linkedin.com/in/calil-mattos-programador/" className=' text-2xl hover:font-bold mb-10 ' >Linkedin</a>
        <AiFillGithub color='black' size={45} className=' ml-auto mr-auto ' />
        <a href="https://github.com/CMTTSx?tab=repositories" className=' text-2xl hover:font-bold ' >GitHub</a>
      </div>
    </div>
  );
}