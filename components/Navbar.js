import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/img/LOGOTIPO.png'

function MobileNav({ open, setOpen }) {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    };

    const goToServices = () => {
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        })
    };

    const goToSkills = () => {
        window.scrollTo({
            top: 5800,
            behavior: "smooth",
        })
    };

    const goToPortfolio = () => {
        window.scrollTo({
            top: 9000,
            behavior: "smooth",
        })
    };

    const goToContact = () => {
        window.scrollTo({
            top: 16000,
            behavior: "smooth",
        })
    };

    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md  `}>
            <div className="flex z-50 items-center justify-center filter drop-shadow-md bg-white h-20 "> {/*logo container*/}
            </div>
            <div className="flex flex-col ml-4 z-50 cursor-pointer ">
                <a className="text-xl font-medium my-2 cursor-pointer " onClick={(goToTop) => setTimeout(() => { setOpen(!open) }, 100)}>
                    <h4 onClick={goToTop} >Home</h4>
                </a>
                <a className="text-xl font-normal my-2" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <h4 onClick={goToServices} >Serviços</h4>
                </a>
                <a className="text-xl font-normal my-2" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <h4 onClick={goToSkills} >Habilidades</h4>
                </a>
                <a className="text-xl font-normal my-2" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <h4 onClick={goToPortfolio} >Portfolio</h4>
                </a>
                <a className="text-xl font-normal my-2" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    <h4 onClick={goToContact} >Contato</h4>
                </a>
            </div>
        </div>
    )
}

export default function Navbar() {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    };

    const goToServices = () => {
        window.scrollTo({
            top: 500,
            behavior: "smooth",
        })
    };

    const goToSkills = () => {
        window.scrollTo({
            top: 2300,
            behavior: "smooth",
        })
    };

    const goToPortfolio = () => {
        window.scrollTo({
            top: 4800,
            behavior: "smooth",
        })
    };

    const goToContact = () => {
        window.scrollTo({
            top: 22000,
            behavior: "smooth",
        })
    };

    const [open, setOpen] = useState(false)
    return (
        <nav className="z-40 mt-[-10em] w-[100%] fixed flex filter drop-shadow-lg bg-[rgb(155,255,6)] px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <div className="text-2xl font-semibold w-20 cursor-pointer " onClick={goToTop} > <Image src={Logo} alt="Logo" />
                </div>
            </div>
            <div className=" w-9/12 flex justify-end items-center">

                <div className=" flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className=" hidden lg:flex mr-[14em] md:flex mr-[4em] md:text-lg text-xl lg:mr-[13em] ip:mr-10 xl:mr-[45%] cursor-pointer ">
                    <h4 onClick={goToTop} className=' px-5 '>
                        Home
                    </h4>
                    <h4 onClick={goToServices} className=' px-5 '>
                        Serviços
                    </h4>
                    <h4 onClick={goToSkills} className=' px-5 '>
                        Habilidades
                    </h4>
                    <h4 onClick={goToPortfolio} className=' px-5 '>
                        Portfolio
                    </h4>
                    <h4 onClick={goToContact} className=' px-5 '>
                        Contato
                    </h4>
                </div>
            </div>
        </nav>
    )
}
