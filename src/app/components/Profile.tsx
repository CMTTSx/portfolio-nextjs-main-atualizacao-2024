import { Irish_Grover } from 'next/font/google'
import { Mohave } from 'next/font/google'
import 'animate.css';
import Image from 'next/image'
import profilePIC from 'public/images/Foto_perfil.svg'

const irish = Irish_Grover({
  subsets: ['latin'],
  weight: '400'
})

function Profile() {

  return (
    <div className='flex ml-[4rem] sm:pb-[18rem] lg:pb-[27rem] w-90% min-w-320 '>

      <div>
        <div className='animate__animated animate__zoomIn'>
          <Image className=" sm:w-[10rem] sm:mx-auto sm:mt-[8rem] lg:mt-[15rem] lg:mx-[70%] 2xl:mx-[75%] 2xl:w-[13rem] 3xl:mx-[75%] " src={profilePIC} alt='profilePIC' />
        </div>
        <div className=" sm:text-center sm:mt-[2rem] lg:text-2xl lg:ml-[-22rem] lg:mt-[-6rem] 2xl:mt-[-9rem] 2xl:ml-[-30rem] xl:text-4xl 2xl:text-4xl 2xl:text-5xl 3xl:ml-[-26%] text-[#53DA00E6] font-bold "> <p className='animate__bounceIn'>CALIL SOUSA MATTOS</p> </div>
        <div className='animate__animated animate__pulse'>
          <div className=" sm:text-center lg:ml-[-21.8rem] xl:text-xl 2xl:text-xl 2xl:ml-[-31rem] 3xl:ml-[-55rem] 3xl:text-2xl font-semibold ">Desenvolvedor de Software </div>
        </div>
        <div className={irish.className}>
          <div className=" sm:mt-[2rem] sm:ml-[1rem] sm:mr-[1rem] lg:ml-[7rem] lg:mr-[25rem] 2xl:text-xl 2xl:ml-[10rem] 2xl:mr-[35%] 3xl:ml-[30rem] 3xl:mr-[73rem] 2xl:mr-[25%] text-justify font-bold font-irish text-[#363537]  ">
            <p className='animate__animated animate__lightSpeedInLeft'>
              Crio e desenvolvo design de produtos digitais como Sistemas,
              Lojas Virtuais, Landing Pages, Sites e Aplicativos. Atualmente atuo criando produtos baseado em human-centered.
            </p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Profile