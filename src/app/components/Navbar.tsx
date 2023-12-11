import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';


//Images
import euaFlagIcon from 'public/images/eua_flag.svg';
import brFlagIcon from 'public/images/brasilflag.svg';
import portfolioSVG from 'public/images/portfolio-svgrepo-com.svg';
import contactIcon from 'public/images/contact-Icon.svg';
import cvIcon from 'public/images/curriculum-vitae-portfolio-svgrepo-com.svg'

function Navbar() {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    };

    const goToServices = () => {
        window.scrollTo({
            top: 950,
            behavior: "smooth",
        })

        const mediaQuery = window.matchMedia('(width: 320px)')
        // Check if the media query is true
        if (mediaQuery.matches) {
            window.scrollTo({
                top: 880,
                behavior: "smooth",
            })
        }
    }

    const goToSkills = () => {
        window.scrollTo({
            top: 2800,
            behavior: "smooth",
        })

        const mediaQuery = window.matchMedia('(width: 320px)')
        // Check if the media query is true
        if (mediaQuery.matches) {
            window.scrollTo({
                top: 4700,
                behavior: "smooth",
            })
        }

        const mediaQuery360s = window.matchMedia('(width: 360px)')
        // Check if the media query is true
        if (mediaQuery360s.matches) {
            window.scrollTo({
                top: 4700,
                behavior: "smooth",
            })
        }
        const mediaQuery375s = window.matchMedia('(width: 375px)')
        // Check if the media query is true
        if (mediaQuery375s.matches) {
            window.scrollTo({
                top: 4700,
                behavior: "smooth",
            })
        }

        const mediaQuery390s = window.matchMedia('(width: 390px)')
        // Check if the media query is true
        if (mediaQuery390s.matches) {
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            })
        }

        const mediaQuery411s = window.matchMedia('(width: 411px)')
        // Check if the media query is true
        if (mediaQuery411s.matches) {
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            })
        }

        const mediaQuery768s = window.matchMedia('(width: 768px)')
        // Check if the media query is true
        if (mediaQuery768s.matches) {
            window.scrollTo({
                top: 4600,
                behavior: "smooth",
            })
        }

        const mediaQuery1024s = window.matchMedia('(width: 1024px)')
        // Check if the media query is true
        if (mediaQuery1024s.matches) {
            window.scrollTo({
                top: 2800,
                behavior: "smooth",
            })
        }
    }

    const goToPortfolio = () => {
        window.scrollTo({
            top: 6300,
            behavior: "smooth",
        })

        const mediaQuery = window.matchMedia('(width: 320px)')
        // Check if the media query is true
        if (mediaQuery.matches) {
            window.scrollTo({
                top: 16600,
                behavior: "smooth",
            })
        }

        const mediaQuery375p = window.matchMedia('(width: 375px)')
        // Check if the media query is true
        if (mediaQuery375p.matches) {
            window.scrollTo({
                top: 16600,
                behavior: "smooth",
            })
        }

        const mediaQuery411p = window.matchMedia('(width: 411px)')
        // Check if the media query is true
        if (mediaQuery411p.matches) {
            window.scrollTo({
                top: 16500,
                behavior: "smooth",
            })
        }

        const mediaQuery768p = window.matchMedia('(width: 768px)')
        // Check if the media query is true
        if (mediaQuery768p.matches) {
            window.scrollTo({
                top: 11500,
                behavior: "smooth",
            })
        }

        const mediaQuery1024p = window.matchMedia('(width: 1024px)')
        // Check if the media query is true
        if (mediaQuery1024p.matches) {
            window.scrollTo({
                top: 7000,
                behavior: "smooth",
            })
        }

        const mediaQuery1280p = window.matchMedia('(width: 1280px)')
        // Check if the media query is true
        if (mediaQuery1280p.matches) {
            window.scrollTo({
                top: 6900,
                behavior: "smooth",
            })
        }
    };

    const goToContact = () => {
        window.scrollTo({
            top: 10000,
            behavior: "smooth",
        })
        const mediaQuery = window.matchMedia('(width: 320px)')
        // Check if the media query is true
        if (mediaQuery.matches) {
            window.scrollTo({
                top: 21000,
                behavior: "smooth",
            })
        }
        const mediaQuery360c = window.matchMedia('(width: 360px)')
        // Check if the media query is true
        if (mediaQuery360c.matches) {
            window.scrollTo({
                top: 25000,
                behavior: "smooth",
            })
        }
        const mediaQuery375c = window.matchMedia('(width: 375px)')
        // Check if the media query is true
        if (mediaQuery375c.matches) {
            window.scrollTo({
                top: 25000,
                behavior: "smooth",
            })
        }
        const mediaQuery390c = window.matchMedia('(width: 390px)')
        // Check if the media query is true
        if (mediaQuery390c.matches) {
            window.scrollTo({
                top: 25000,
                behavior: "smooth",
            })
        }
        const mediaQuery411c = window.matchMedia('(width: 411px)')
        // Check if the media query is true
        if (mediaQuery411c.matches) {
            window.scrollTo({
                top: 25000,
                behavior: "smooth",
            })
        }
        const mediaQuery768c = window.matchMedia('(width: 768px)')
        // Check if the media query is true
        if (mediaQuery768c.matches) {
            window.scrollTo({
                top: 25000,
                behavior: "smooth",
            })
        }
        const mediaQuery1024c = window.matchMedia('(width: 1024px)')
        // Check if the media query is true
        if (mediaQuery1024c.matches) {
            window.scrollTo({
                top: 25000,
                behavior: "smooth",
            })
        }
    };


    return (
        <div className=' min-w-320 ' >

            <aside className="h-full w-[4rem] flex flex-col space-y-10 items-center justify-center bg-[#9BFF06] text-white fixed ">

                <div onClick={goToTop} title='Perfil' className=" h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                </div>

                <div onClick={goToServices} title='Serviços' className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>

                <div onClick={goToSkills} title='Habilidades' className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>

                <div onClick={goToPortfolio} title='Portfolio' className="h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer hover:text-white hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <Image src={portfolioSVG} alt='portfolioSVG' />
                </div>


                <div onClick={goToContact} title='Contato' className="h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer hover:text-white hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <Image src={contactIcon} alt='contactIcon' />
                </div>

            </aside>

            <header className="h-16 w-full flex items-left justify-end px-[2rem] bg-[#9BFF06]">
                <div className="flex flex-shrink-0 items-center space-x-4 text-white">

                    <div className='flex flex-row cursor-pointer pt-0.2 '>

                        <div className=' flex flex-row text-[#4F9D69] hover:scale-110 '>
                            <Image src={cvIcon} alt='cvIcon' className=' w-10 ' />

                            <Link href="/CV PT-BR_2024.pdf" download="cv"><h4 className=' sm:pt-[0.5rem] ' >Currículo</h4></Link>
                        </div>
                    </div>

                    <div className="flex flex-row cursor-pointer ">
                        <Link href='/en-us'><Image className='mx-2 hover:scale-110' src={euaFlagIcon} alt="euaFlagIcon" /></Link>
                        <Link href='/' ><Image className='mx-2 hover:scale-110' src={brFlagIcon} alt="brFlagIcon" /></Link>
                    </div>
                </div>
            </header>


        </div>

    )
}


export default Navbar