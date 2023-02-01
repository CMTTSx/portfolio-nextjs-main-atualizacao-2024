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

    const mediaQuery320p = window.matchMedia('(width: 320px)')
    // Check if the media query is true
    if (mediaQuery320p.matches) {
        window.scrollTo({
            top: 9700,
            behavior: "smooth",
        })
    }

    const mediaQuery375p = window.matchMedia('(width: 375px)')
    // Check if the media query is true
    if (mediaQuery375p.matches) {
        window.scrollTo({
            top: 9700,
            behavior: "smooth",
        })
    }    
    
    const mediaQuery390p = window.matchMedia('(width: 390px)')
    // Check if the media query is true
    if (mediaQuery390p.matches) {
        window.scrollTo({
            top: 9700,
            behavior: "smooth",
        })
    } 
    
    const mediaQuery425p = window.matchMedia('(width: 425px)')
    // Check if the media query is true
    if (mediaQuery425p.matches) {
        window.scrollTo({
            top: 9700,
            behavior: "smooth",
        })
    }

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

        const mediaQuery = window.matchMedia('(width: 768px)')
        // Check if the media query is true
        if (mediaQuery.matches) {
            window.scrollTo({
                top: 700,
                behavior: "smooth",
            })
        }           
    };

    const goToSkills = () => {
        window.scrollTo({
            top: 2200,
            behavior: "smooth",
        })

        const mediaQuery = window.matchMedia('(width: 768px)')
        // Check if the media query is true
        if (mediaQuery.matches) {
            window.scrollTo({
                top: 5100,
                behavior: "smooth",
            })
        }

        const mediaQuery810s = window.matchMedia('(width: 810px)')
        // Check if the media query is true
        if (mediaQuery810s.matches) {
            window.scrollTo({
                top: 5000,
                behavior: "smooth",
            })
        }

        const mediaQuery820s = window.matchMedia('(width: 820px)')
        // Check if the media query is true
        if (mediaQuery820s.matches) {
            window.scrollTo({
                top: 5000,
                behavior: "smooth",
            })
        }

        const mediaQuery834s = window.matchMedia('(width: 834px)')
        // Check if the media query is true
        if (mediaQuery834s.matches) {
            window.scrollTo({
                top: 5000,
                behavior: "smooth",
            })
        }

        const mediaQuery1024s = window.matchMedia('(width: 1024px)')
        // Check if the media query is true
        if (mediaQuery1024s.matches) {
            window.scrollTo({
                top: 3300,
                behavior: "smooth",
            })
        }
        
    };

    const goToPortfolio = () => {
        window.scrollTo({
            top: 4750,
            behavior: "smooth",
        })

        const mediaQuery = window.matchMedia('(width: 768px)')
        // Check if the media query is true
        if (mediaQuery.matches) {
            window.scrollTo({
                top: 7600,
                behavior: "smooth",
            })
        }

        const mediaQuery810p = window.matchMedia('(width: 810px)')
        // Check if the media query is true
        if (mediaQuery810p.matches) {
            window.scrollTo({
                top: 7600,
                behavior: "smooth",
            })
        }

        const mediaQuery820p = window.matchMedia('(width: 820px)')
        // Check if the media query is true
        if (mediaQuery820p.matches) {
            window.scrollTo({
                top: 7600,
                behavior: "smooth",
            })
        }

        const mediaQuery834p = window.matchMedia('(width: 834px)')
        // Check if the media query is true
        if (mediaQuery834p.matches) {
            window.scrollTo({
                top: 7600,
                behavior: "smooth",
            })
        }

        const mediaQuery1024p = window.matchMedia('(width: 1024px)')
        // Check if the media query is true
        if (mediaQuery1024p.matches) {
            window.scrollTo({
                top: 5600,
                behavior: "smooth",
            })
        }
    };

    const goToContact = () => {
        window.scrollTo({
            top: 26000,
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

                <div className=" hidden md:flex md:flex-auto md:flex-row md:ml-[auto]  cursor-pointer text-lg mr-20 p-[-20] ">
                    <h4 onClick={goToTop} className='flex-1 '>
                        Home
                    </h4>
                    <h4 onClick={goToServices} className='flex-1 mr-5'>
                        Serviços
                    </h4>
                    <h4 onClick={goToSkills} className='flex-1 mr-5'>
                        Habilidades
                    </h4>
                    <h4 onClick={goToPortfolio} className='flex-1 mr-5'>
                        Portfolio
                    </h4>
                    <h4 onClick={goToContact} className='flex-1 mr-5'>
                        Contato
                    </h4>
                </div>
            </div>
        </nav>
    )
}
