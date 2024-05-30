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
import cybersecurityIcon from 'public/images/lock-protection-privacy-cyber-security-safety-svgrepo-com.svg'

import { Mohave } from 'next/font/google';

const mohave = Mohave({
  subsets: ['latin'],
  weight: '300'
})


function Services() {
  return (

    <section className=' sm:ml-[4rem] h-full min-w-320 ' >

      <h2 className=' text-center md:pr-5 font-bold text-3xl mb-20 bg-[#00FF80] '>SERVIÇOS</h2>

      {/* CARDS SERVIÇOS */}
      <div className=" mx-auto lg:grid grid-cols-3 gap-4 sm:flex sm:flex-col flex-wrap   ">

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={frontEndIcon} alt='frontEndIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>DESENVOLVEDOR FRONT-END</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>Atua desenvolvendo a interface (telas do aplicativo), toda a lógica de alto nível da aplicação como login, persistência de dados local, faz acesso aos endpoints que o webservice provê e mostra tudo ao usuário.
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={backEndIcon} alt='backEndIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>DESENVOLVEDOR BACK-END</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>Atua no back-end encarregado de fazer o planejamento, a construção, a implementação e a manutenção da estrutura tecnológica que constituem a base de um site. Sem esse trabalho, nada na internet pode funcionar, já que tudo está integrado ao mecanismo conectado aos servidores.
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={sistemasIcon} alt='sistemasIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>DESENVOLVIMENTO DE SISTEMAS</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>Criação de Sistemas e ERP’s, totalmente customizados. Auxilia o gestor da empresa a melhorar os processos internos e integrar as atividades de diferentes setores, como vendas, finanças, estoque e recursos humanos. O resultado é o acesso a insights valiosos, que contribuem para uma tomada de decisão acertada.
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={appIcon} alt='appIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>DESENVOLVIMENTO DE APLICATIVOS</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>Programa, codifica e testa nas plataformas Android e iOS. Executa a manutenção dos sistemas, fazendo eventuais correções necessárias, visando atender às necessidades dos usuários. Desenvolve trabalhos de montagem, depuração e testes de programas, executando serviços de manutenção nos programas já desenvolvidos.
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={websiteIcon} alt='websiteIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>CRIAÇÃO DE SITES E HOTSITES</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>Desenvolvedor de Sites e Hotsites, usando das melhores práticas e tecnologias. Com Layout Profissional e Responsivo, e com todas as características e necessidades do cliente.
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={landingpageIcon} alt='landingpageIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>CRIAÇÃO DE LANDING PAGES</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>Landing Page é uma página que possui todos os elementos voltados à conversão do visitante em Lead, oportunidade ou cliente. Também conhecidas como páginas de aterrissagem ou páginas de conversão, as Landing Pages são muito usadas em campanhas de Marketing Digital, pois costumam ter altas taxas de conversão.
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' mx-auto pt-10 ' src={uiuxIcon} alt='uiuxIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>UI | UX</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>O UI Design tem como principal foco a interface de um determinado aplicativo ou site, o UX Design observa esse e outros aspectos, que vão desde o caminho que um usuário faz para chegar ao seu objetivo final até experiências anteriores que uma pessoa teve com aquele produto ou serviço, que podem impactar.
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%]  ">
          <Image className=' pl-2 ml-auto mr-auto pt-10 ' src={seoIcon} alt='seoIcon https://www.flaticon.com/free-icons/web-design' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>SEO</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '>Posicionando sites por meio de determinadas palavras-chave na primeira página dos mecanismos de pesquisa (Google, Bing, Yahoo, etc.), aplicando estratégias complexas e viáveis para a adequação aos algoritmos dos motores de busca.
            </p>
          </div>
        </div>

        <div className=" sm:ml-[0rem] sm:mr-[0rem] md:mx-[10rem] md:mt-1 lg:ml-[10%] md:p sm:w-[100%] md:w-[50%] h-[30rem] lg:mr-[0rem] lg:w-[80%] 2xl:ml-[7%] 2xl:w-[80%] mb-[10rem] ">
          <Image className=' mx-auto pt-10 ' src={cybersecurityIcon} alt='cybersecurityIcon' width={150} height={150} />
          <h3 className=' text-center mt-5 font-bold '>ESPECIALISTA EM CIBERSEGURANÇA</h3>
          <div className={mohave.className} >
            <p className=' text-justify sm:ml-[5%] sm:mr-[5%] sm:mt-[8%] '> Atuando como Analista de Segurança Ofensiva (Pentest) e Defensiva (Blue Team). com Testes de intrusão, análise de vulnerabilidades, proteção de dados confidenciais, implementação de plataformas de segurança centralizadas para controle, monitorização e neutralização de ameaças na rede, endpoints e distração de eventuais atacantes.
            </p>
          </div>
        </div>

      </div>

    </section>

  )
}

export default Services