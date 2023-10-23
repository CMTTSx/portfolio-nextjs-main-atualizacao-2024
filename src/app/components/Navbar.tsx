import React from 'react';
import Image from 'next/image';

//Images
import euaFlagIcon from 'public/images/eua_flag.svg';
import brFlagIcon from 'public/images/brasilflag.svg';
import portfolioSVG from 'public/images/portfolio-svgrepo-com.svg';

function Navbar() {
    return (
        <div>

            <aside className="h-full w-[4rem] flex flex-col space-y-10 items-center justify-center bg-[#9BFF06] text-white fixed ">
                <div title='Perfil' className=" h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                </div>

                <div title='Serviços' className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>

                <div title='Habilidades' className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>

                <div title='Portfolio' className="h-8 w-8 flex items-center justify-center rounded-lg cursor-pointer hover:text-white hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                    <Image src={portfolioSVG} alt='portfolioSVG' />
                </div>
            </aside>

            <header className="h-16 w-full flex items-left justify-end px-[2rem] bg-[#9BFF06]">
                <div className="flex flex-shrink-0 items-center space-x-4 text-white">

                    <div className='flex flex-row cursor-pointer'>
                        <div className='p-0.5 border-[#00E332] text-[#00E332] border-2 hover:scale-110 '><h4>Currículo</h4></div>
                    </div>

                    <div className="flex flex-row cursor-pointer ">
                        <Image className='mx-2 hover:scale-110' src={euaFlagIcon} alt="euaFlagIcon" />
                        <Image className='mx-2 hover:scale-110' src={brFlagIcon} alt="brFlagIcon" />
                    </div>
                </div>
            </header>





        </div>

    )
}

export default Navbar