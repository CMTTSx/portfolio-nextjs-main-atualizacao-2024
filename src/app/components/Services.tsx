import React from 'react'
import Image from 'next/image';

import frontEndIcon from 'public/images/front-end.png';
import backEndIcon from 'public/images/back-end.png';
import ecommerceIcon from 'public/images/ecommerce.png';
import sistemasIcon from 'public/images/sistemas.png';
import appIcon from 'public/images/app.png';
import websiteIcon from 'public/images/web-site.png';
import landingpageIcon from 'public/images/landing-page.png';
import uiuxIcon from 'public/images/ui-ux.png';
import seoIcon from 'public/images/seo.png';

import { Mohave } from 'next/font/google';

const mohave = Mohave({
  subsets: ['latin'],
  weight: '300'
})


function Services() {
  return (
    <div>

      <h2 className=' lg:w-100% sm:pl-[3.5rem] sm2:pl-[4rem] sm:mt-[20rem] sm:mb-[-10rem] lg:mt-[20rem] lg:mb-[-30rem] text-center font-bold text-3xl mb-20 bg-[#00FF80] '>SERVIÇOS</h2>

      <div className=' overflow-x-hidden ' >


        {/* CARDS SERVIÇOS */}
        <div className=" flex sm:flex-col lg:flex-row flex-wrap w-[95%] sm:mx-4 sm360:ml-[2.2rem] sm2:mx-9 sm3:mx-11 sm4:mx-[3.7rem] md:mx-[13rem] lg:ml-[4rem] xl:ml-[4.5rem] 2xl:ml-[4.5rem] lg:mr-[10rem] sm:mt-[20rem] lg:mt-[40rem] overflow-hidden ">

          <div className=' w-[33%] cursor-pointer mb-20 '>
            <Image className=' sm:mx-[7.4rem] lg:mx-auto ' src={frontEndIcon} alt='frontEndIcon https://www.flaticon.com/free-icons/web-design' width={160} />
            <h3 className=' lg:text-xl text-center font-bold sm:pt-[1rem] lg:pt-[1.6rem] sm:ml-[6.2rem] md:ml-[2rem] lg:ml-auto sm:mr-[-8rem] lg:mr-[0rem] '>DESENVOLVEDOR FRONT-END</h3>
            <div className={mohave.className} >
              <p className=' text-justify sm:mt-4 lg:pt-[0.2rem] px-2 sm:ml-[4rem] sm:mr-[-11.5rem] md:ml-[0rem] lg:mr-5 '>Atua desenvolvendo a interface (telas do aplicativo), toda a lógica de alto nível da aplicação como login, persistência de dados local, faz acesso aos endpoints que o webservice provê e mostra tudo ao usuário.</p>
            </div>
          </div>

          <div className=' w-[33%] cursor-pointer mb-20 '>
            <Image className=' sm:ml-[7.3rem] md:ml-[6.9rem] lg:mx-auto lg:mt-[-0.9rem] ' src={backEndIcon} alt='backEndIcon https://www.flaticon.com/free-icons/web-design' width={180} />
            <h3 className=' lg:text-xl text-center font-bold sm:pt-[1rem] lg:pt-[1.2rem] sm:ml-[6.2rem] md:ml-[3rem] lg:ml-auto sm:mr-[-8rem] lg:mr-[0rem] '>DESENVOLVEDOR BACK-END</h3>
            <div className={mohave.className} >
              <p className=' text-justify pt-[1.2rem] px-2 sm:ml-[4rem] sm:mr-[-11.5rem] md:ml-[0rem] lg:mr-5 '>Atua no back-end encarregado de fazer o planejamento, a construção, a implementação e a manutenção da estrutura tecnológica que constituem a base de um site. Sem esse trabalho, nada na internet pode funcionar, já que tudo está integrado ao mecanismo conectado aos servidores.</p>
            </div>
          </div>

          <div className=' w-[33%] cursor-pointer mb-20 mt-[-0.5rem] '>
            <Image className=' sm:ml-[7.5rem] lg:mx-auto  lg:mt-[1rem] ' src={ecommerceIcon} alt='ecommerceIcon https://www.flaticon.com/free-icons/web-design' width={150} />
            <h3 className=' lg:text-xl text-center font-bold sm:pt-[1rem] lg:pt-[1.7rem] sm:ml-[7rem] md:ml-[3rem] lg:ml-auto sm:mr-[-8rem] lg:mr-[0rem] '>ECOMMERCE / LOJA VIRTUAL</h3>
            <div className={mohave.className} >
              <p className=' text-justify pt-[1.2rem] px-2 sm:ml-[4rem] sm:mr-[-11.5rem] md:ml-[0rem] lg:mr-5 '>Desenvolvendo tanto a Interface Gráfica quanto a parte Lógica. Criando assim uma plataforma perfeita para que seu negócio possa crescer sustentável com todo o suporte que você precisa, e com Economia de tempo e Redução de Custos.
              </p>
            </div>
          </div>

          <div className=' w-[33%] cursor-pointer mb-20 '>
            <Image className=' sm:ml-[7.5rem] md:ml-[6.8rem] lg:mx-auto mt-[0rem] ' src={sistemasIcon} alt='sistemasIcon https://www.flaticon.com/free-icons/web-design' width={180} />
            <h3 className=' lg:text-xl text-center font-bold sm:pt-[1rem] lg:pt-[1.2rem] sm:ml-[6.2rem] md:ml-[3rem] lg:ml-auto sm:mr-[-8rem] lg:mr-[0rem] '>DESENVOLVIMENTO DE SISTEMAS</h3>
            <div className={mohave.className} >
              <p className=' text-justify pt-[1.2rem] px-2 sm:ml-[4rem] sm:mr-[-11.5rem] md:ml-[0rem] lg:mr-5 '>Criação de Sistemas e ERP’s, totalmente customizados. Auxilia o gestor da empresa a melhorar os processos internos e integrar as atividades de diferentes setores, como vendas, finanças, estoque e recursos humanos. O resultado é o acesso a insights valiosos, que contribuem para uma tomada de decisão acertada.
              </p>
            </div>
          </div>

          <div className=' w-[33%] cursor-pointer mb-20 '>
            <Image className=' sm:ml-[7.2rem] md:ml-[6.4rem] lg:mx-auto mt-[0rem] ' src={appIcon} alt='appIcon https://www.flaticon.com/free-icons/web-design' width={180} />
            <h3 className=' lg:text-xl text-center font-bold sm:pt-[1rem] lg:pt-[1.2rem] sm:ml-[6.5rem] md:ml-[3rem] lg:ml-auto sm:mr-[-8.5rem] lg:mr-[0rem] '>DESENVOLVEDOR DE APLICATIVOS</h3>
            <div className={mohave.className} >
              <p className=' text-justify pt-[1.2rem] px-2 sm:ml-[4rem] sm:mr-[-11.5rem] md:ml-[0rem] lg:mr-5 '>Programa, codifica e testa nas plataformas Android e iOS. Executa a manutenção dos sistemas, fazendo eventuais correções necessárias, visando atender às necessidades dos usuários. Desenvolve trabalhos de montagem, depuração e testes de programas, executando serviços de manutenção nos programas já desenvolvidos.
              </p>
            </div>
          </div>

          <div className=' w-[33%] cursor-pointer mb-20 '>
            <Image className=' sm:ml-[7.5rem] lg:mx-auto mt-[1.2rem] ' src={websiteIcon} alt='websiteIcon https://www.flaticon.com/free-icons/web-design' width={160} />
            <h3 className=' lg:text-xl text-center font-bold sm:pt-[1rem] lg:pt-[1.5rem] sm:ml-[6.5rem] md:ml-[3.4rem] lg:ml-auto sm:mr-[-8.5rem] lg:mr-[0rem] 2xl:mt-[-0.1rem] '>CRIAÇÃO DE SITES E HOTSITES</h3>
            <div className={mohave.className} >
              <p className=' text-justify pt-[1.2rem] px-2 sm:ml-[4rem] sm:mr-[-11.5rem] md:ml-[0rem] lg:mr-5  lg:mt-[1.5rem] lg:mt-[-0.3rem] 2xl:mt-[-0.1rem] '>Desenvolvedor de Sites e Hotsites, usando das melhores práticas e tecnologias. Com Layout Profissional e Responsivo, e com todas as características e necessidades do cliente.
              </p>
            </div>
          </div>

          <div className=' w-[33%] cursor-pointer mb-20 '>
            <Image className=' sm:ml-[7.5rem] lg:mx-auto mt-[0rem] ' src={landingpageIcon} alt='landingpageIcon https://www.flaticon.com/free-icons/web-design' width={160} />
            <h3 className=' lg:text-xl text-center font-bold sm:pt-[1rem] lg:pt-[1.2rem] sm:ml-[7rem] md:ml-[3.5rem] lg:ml-auto sm:mr-[-8rem] lg:mr-[0rem] '>CRIAÇÃO DE LANDING PAGES</h3>
            <div className={mohave.className} >
              <p className=' text-justify pt-[1.2rem] px-2 sm:ml-[4rem] sm:mr-[-11.5rem] md:ml-[0rem] lg:mr-5 '>Landing Page é uma página que possui todos os elementos voltados à conversão do visitante em Lead, oportunidade ou cliente. Também conhecidas como páginas de aterrissagem ou páginas de conversão, as Landing Pages são muito usadas em campanhas de Marketing Digital, pois costumam ter altas taxas de conversão.
              </p>
            </div>
          </div>


          <div className=' w-[33%] cursor-pointer mb-20 '>
            <Image className=' sm:ml-[7.5rem] md:ml-[8rem] lg:mx-auto mt-[0rem] ' src={uiuxIcon} alt='uiuxIcon https://www.flaticon.com/free-icons/web-design' width={160} />
            <h3 className=' lg:text-xl text-center font-bold sm:pt-[1rem] lg:pt-[1.2rem] sm:ml-[6.2rem] md:ml-[2rem] lg:ml-auto sm:mr-[-8rem] lg:mr-[0rem] '>UI | UX</h3>
            <div className={mohave.className} >
              <p className=' text-justify pt-[1.2rem] px-2 sm:ml-[4rem] sm:mr-[-11.5rem] md:ml-[0rem] lg:mr-5 '>O UI Design tem como principal foco a interface de um determinado aplicativo ou site, o UX Design observa esse e outros aspectos, que vão desde o caminho que um usuário faz para chegar ao seu objetivo final até experiências anteriores que uma pessoa teve com aquele produto ou serviço, que podem impactar.
              </p>
            </div>
          </div>

          <div className=' w-[33%] cursor-pointer mb-20 '>
            <Image className=' sm:ml-[7.7rem] md:ml-[8rem] lg:mx-auto mt-[0rem] ' src={seoIcon} alt='seoIcon https://www.flaticon.com/free-icons/web-design' width={160} />
            <h3 className=' lg:text-xl text-center font-bold sm:pt-[1rem] lg:pt-[1.5rem] sm:ml-[7rem] md:ml-[2rem] lg:ml-auto sm:mr-[-8rem] lg:mr-[0rem] '>ESPECIALISTA EM SEO</h3>
            <div className={mohave.className} >
              <p className=' text-justify pt-[1rem] px-2 sm:ml-[4rem] sm:mr-[-11.5rem] md:ml-[0rem] lg:mr-5 '>Posicionando sites por meio de determinadas palavras-chave na primeira página dos mecanismos de pesquisa (Google, Bing, Yahoo, etc.), aplicando estratégias complexas e viáveis para a adequação aos algoritmos dos motores de busca.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Services