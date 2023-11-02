import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import emailIcon from 'public/images/icons8-email-64.png';
import linkedinIcon from 'public/images/linkedin-svgrepo-com.svg';
import githubIcon from 'public/images/github.svg';

function Contact() {
    return (
        <div className=' w-full mt-20 mb-20 ' >

            <h1 className=' text-center text-4xl mt-5 cursor-pointer hover:font-bold ' >Entre em Contato</h1>

            <div className="flex flex-col align-center mx-[48%] mt-20 ">
                <div>
                    <Image src={emailIcon} alt='https://icons8.com/icons/email ' width={45} className=' hover:scale-110 cursor-pointer ' />
                    <div className='ml-[-6.9rem] mt-2 '> <Link href="mailto:contatocsmpm@gmail.com" className=' text-2xl hover:font-bold mb-10 '>contatocsmpm@gmail.com</Link> </div>
                </div>
                <div className='mt-12' >
                    <Image src={linkedinIcon} alt='linkedinIcon' width={45} className=' hover:scale-110 cursor-pointer ' />
                    <div className='ml-[-1rem] mt-2 '> <Link href="https://www.linkedin.com/in/calil-mattos-programador/" className=' text-2xl hover:font-bold mb-10 '>Linkedin</Link> </div>
                </div>
                <div className='mt-12' >
                    <Image src={githubIcon} alt='githubIcon' width={45} className=' hover:scale-110 cursor-pointer ' />
                    <div className='ml-[-0.8rem] mt-2 '> <Link href="https://github.com/CMTTSx?tab=repositories" className=' text-2xl hover:font-bold mb-10 '>Github</Link> </div>
                </div>
            </div>

        </div>
    )
}

export default Contact