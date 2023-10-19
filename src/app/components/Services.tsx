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

      {/* CARDS SERVIÇOS */}
      <div className="flex flex-auto flex-wrap justify-evenly w-[95%] mx-20 mt-[40rem] ">

        <div className=' w-[33%] cursor-pointer mb-20 '>
          <Image className=' mx-auto ' src={frontEndIcon} alt='frontEndIcon https://www.flaticon.com/free-icons/web-design' width={160} />
          <h3 className='text-xl text-center font-bold pt-5'>DESENVOLVEDOR FRONT-END</h3>
          <div className={mohave.className} >
            <p className=' text-justify pt-5 px-2 mr-5 '>Atua desenvolvendo a interface (telas do aplicativo), toda a lógica de alto nível da aplicação como login, persistência de dados local, faz acesso aos endpoints que o webservice provê e mostra tudo ao usuário.</p>
          </div>
        </div>

        <div className=' w-[33%] cursor-pointer mb-20 '>
          <Image className=' mx-auto mt-[-1.2rem] ' src={backEndIcon} alt='backEndIcon https://www.flaticon.com/free-icons/web-design' width={180} />
          <h3 className=' text-xl text-center font-bold pt-5'>DESENVOLVEDOR BACK-END</h3>
          <div className={mohave.className} >
            <p className=' text-justify pt-5 px-2 mr-5 '>Atua no back-end encarregado de fazer o planejamento, a construção, a implementação e a manutenção da estrutura tecnológica que constituem a base de um site. Sem esse trabalho, nada na internet pode funcionar, já que tudo está integrado ao mecanismo conectado aos servidores.</p>
          </div>
        </div>

        <div className=' w-[33%] cursor-pointer mb-20 '>
          <Image className=' mx-auto mt-[1.2rem] ' src={ecommerceIcon} alt='ecommerceIcon https://www.flaticon.com/free-icons/web-design' width={140} />
          <h3 className=' text-xl text-center font-bold pt-5'>ECOMMERCE / LOJA VIRTUAL</h3>
          <div className={mohave.className} >
            <p className=' text-justify pt-5 px-2 mr-5 '>Desenvolvendo tanto a Interface Gráfica quanto a parte Lógica. Criando assim uma plataforma perfeita para que seu negócio possa crescer sustentável com todo o suporte que você precisa, e com Economia de tempo e Redução de Custos.
            </p>
          </div>
        </div>

        <div className=' w-[33%] cursor-pointer mb-20 '>
          <Image className=' mx-auto mt-[1.2rem] ' src={sistemasIcon} alt='sistemasIcon https://www.flaticon.com/free-icons/web-design' width={180} />
          <h3 className=' text-xl text-center font-bold pt-5'>DESENVOLVIMENTO DE SISTEMAS</h3>
          <div className={mohave.className} >
            <p className=' text-justify pt-5 px-2 mr-5 '>Criação de Sistemas e ERP’s, totalmente customizados. Auxilia o gestor da empresa a melhorar os processos internos e integrar as atividades de diferentes setores, como vendas, finanças, estoque e recursos humanos. O resultado é o acesso a insights valiosos, que contribuem para uma tomada de decisão acertada.
            </p>
          </div>
        </div>

        <div className=' w-[33%] cursor-pointer mb-20 '>
          <Image className=' mx-auto mt-[1.2rem] ' src={appIcon} alt='appIcon https://www.flaticon.com/free-icons/web-design' width={180} />
          <h3 className=' text-xl text-center font-bold pt-5'>DESENVOLVEDOR DE APLICATIVOS</h3>
          <div className={mohave.className} >
            <p className=' text-justify pt-5 px-2 mr-5 '>Programa, codifica e testa nas plataformas Android e iOS. Executa a manutenção dos sistemas, fazendo eventuais correções necessárias, visando atender às necessidades dos usuários. Desenvolve trabalhos de montagem, depuração e testes de programas, executando serviços de manutenção nos programas já desenvolvidos.
            </p>
          </div>
        </div>

        <div className=' w-[33%] cursor-pointer mb-20 '>
          <Image className=' mx-auto mt-[2.3rem] ' src={websiteIcon} alt='websiteIcon https://www.flaticon.com/free-icons/web-design' width={160} />
          <h3 className=' text-xl text-center font-bold pt-5'>CRIAÇÃO DE SITES E HOTSITES</h3>
          <div className={mohave.className} >
            <p className=' text-justify pt-6 px-2 mr-4 '>Desenvolvedor de Sites e Hotsites, usando das melhores práticas e tecnologias. Com Layout Profissional e Responsivo, e com todas as características e necessidades do cliente.
            </p>
          </div>
        </div>

        <div className=' w-[33%] cursor-pointer mb-20 '>
          <Image className=' mx-auto mt-[2.3rem] ' src={landingpageIcon} alt='landingpageIcon https://www.flaticon.com/free-icons/web-design' width={160} />
          <h3 className=' text-xl text-center font-bold pt-5'>CRIAÇÃO DE LANDING PAGES</h3>
          <div className={mohave.className} >
            <p className=' text-justify pt-5 px-2 mr-4 '>Landing Page é uma página que possui todos os elementos voltados à conversão do visitante em Lead, oportunidade ou cliente. Também conhecidas como páginas de aterrissagem ou páginas de conversão, as Landing Pages são muito usadas em campanhas de Marketing Digital, pois costumam ter altas taxas de conversão.
            </p>
          </div>
        </div>


        <div className=' w-[33%] cursor-pointer mb-20 '>
          <Image className=' mx-auto mt-[2.3rem] ' src={uiuxIcon} alt='uiuxIcon https://www.flaticon.com/free-icons/web-design' width={160} />
          <h3 className=' text-xl text-center font-bold pt-5'>UI | UX</h3>
          <div className={mohave.className} >
            <p className=' text-justify pt-5 px-2 mr-4 '>O UI Design tem como principal foco a interface de um determinado aplicativo ou site, o UX Design observa esse e outros aspectos, que vão desde o caminho que um usuário faz para chegar ao seu objetivo final até experiências anteriores que uma pessoa teve com aquele produto ou serviço, que podem impactar.
            </p>
          </div>
        </div>

        <div className=' w-[33%] cursor-pointer mb-20 '>
          <Image className=' mx-auto mt-[2.3rem] ' src={seoIcon} alt='seoIcon https://www.flaticon.com/free-icons/web-design' width={160} />
          <h3 className=' text-xl text-center font-bold pt-5'>ESPECIALISTA EM SEO</h3>
          <div className={mohave.className} >
            <p className=' text-justify pt-5 px-2 mr-4 '>Posicionando sites por meio de determinadas palavras-chave na primeira página dos mecanismos de pesquisa (Google, Bing, Yahoo, etc.), aplicando estratégias complexas e viáveis para a adequação aos algoritmos dos motores de busca.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Services