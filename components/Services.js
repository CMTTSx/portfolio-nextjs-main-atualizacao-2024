import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

//Importando Icons
import frontEndIcon from '../public/img/FrontendIcon.png'
import backEndIcon from '../public/img/BackEndIcon.png'
import ecommerceIcon from '../public/img/Ecommerce.png'
import seoIcon from '../public/img/especialista-seo.svg'
import appDevIcon from '../public/img/appBuilder.jpg'
import uiuxIcon from '../public/img/uiuix.png'
import sistemasIcon from '../public/img/DESENVOLVIMENTO_DE_SISTEMAS_WEB.png'
import siteIcon from '../public/img/criacao-de-hotsite.png'
import lpIcon from '../public/img/landingpage.png'

export default function Services() {
    return (
        <div>
            <h1 className=' text-center text-4xl bg-tab font-[600]' >SERVIÇOS</h1>


            <div className=" mt-20 mb-20 grid grid-cols-3 gap-4 content-center sm:flex sm:flex-col md:grid-cols-2 flex-col flex- lg:flex-row lg:flex-wrap cursor-[pointer] ">

                <div className=' w-[30em] sm:w-[18em] sm:ml-[auto] sm:mr-[auto]  sm2:w-[20em] sm3:w-[24em] md:w-[22em] md:ml-[13em] lg:ml-10 lg:mt-10  border-[3px] border-[blue] py-5 text-center rounded-md hover:shadow-2xl md:hover:scale-105   ' >
                    <Image src={frontEndIcon} alt="frontendIcon" width='150px' height='150px' />
                    <h2 className=' text-2xl font-bold text-center sm:text-[20px] '>DESENVOLVEDOR FRONT-END</h2>
                    <p className=' ml-10 mr-10 text-center mt-5 text-lg mb-10 sm:ml-[0.5em] sm:mr-[0.8em] ' >Atua desenvolvendo a interface (telas do aplicativo), toda a lógica de alto nível da aplicação como login, persistência de dados local, faz acesso aos endpoints que o webservice provê e mostra tudo ao usuário.</p>
                </div>

                <div className=' w-[30em] sm:w-[18em] sm:ml-[auto] sm:mr-[auto]  sm2:w-[20em] sm3:w-[24em] md:w-[22em] md:ml-[13em] lg:ml-10 lg:mt-10  border-[3px] border-[blue] py-5 text-center rounded-md hover:shadow-2xl md:hover:scale-105   ' >
                    <Image src={backEndIcon} alt="backendIcon" width='150px' height='150px' />
                    <h2 className=' text-2xl font-bold text-center sm:text-[20px] '>DESENVOLVEDOR BACK-END</h2>
                    <p className=' mt-5 text-lg ' >Atua no back-end encarregado de fazer o planejamento, a construção, a implementação e a manutenção da estrutura tecnológica que constituem a base de um site. Sem esse trabalho, nada na internet pode funcionar, já que tudo está integrado ao mecanismo conectado aos servidores.</p>
                </div>

                <div className=' w-[30em] sm:w-[18em] sm:ml-[auto] sm:mr-[auto]  sm2:w-[20em] sm3:w-[24em] md:w-[22em] md:ml-[13em] lg:ml-10 lg:mt-10  border-[3px] border-[blue] py-5 text-center rounded-md hover:shadow-2xl md:hover:scale-105   ' >
                    <Image src={ecommerceIcon} alt="ecommerceIcon" width='180px' height='150px' />
                    <h2 className=' text-2xl font-bold text-center sm:text-[20px] '>ECOMMERCE / LOJA VIRTUAL</h2>
                    <p className=' mt-5 text-lg ' >Desenvolvendo tanto a Interface Gráfica quanto a parte Lógica. Criando assim uma plataforma perfeita para que seu negócio possa crescer sustentável com todo o suporte que você precisa, e com Economia de tempo e Redução de Custos. </p>
                </div>

                <div className=' w-[30em] sm:w-[18em] sm:ml-[auto] sm:mr-[auto]  sm2:w-[20em] sm3:w-[24em] md:w-[22em] md:ml-[13em] lg:ml-10 lg:mt-10  border-[3px] border-[blue] py-5 text-center rounded-md hover:shadow-2xl md:hover:scale-105   ' >
                    <Image src={seoIcon} alt="SEOIcon" width='150px' height='150px' />
                    <h2 className=' text-2xl font-bold text-center sm:text-[20px] '>ESPECIALISTA EM SEO</h2>
                    <p className=' mt-5 text-lg ' >Posicionando sites por meio de determinadas palavras-chave na primeira página dos mecanismos de pesquisa (Google, Bing, Yahoo, etc.), aplicando estratégias complexas e viáveis para a adequação aos algoritmos dos motores de busca.</p>
                </div>

                <div className=' w-[30em] sm:w-[18em] sm:ml-[auto] sm:mr-[auto]  sm2:w-[20em] sm3:w-[24em] md:w-[22em] md:ml-[13em] lg:ml-10 lg:mt-10  border-[3px] border-[blue] py-5 text-center rounded-md hover:shadow-2xl md:hover:scale-105   ' >
                    <Image src={appDevIcon} alt="appDevMobilecon" width='200px' height='150px' />
                    <h2 className=' text-2xl font-bold text-center sm:text-[20px] '>DESENVOLVEDOR DE APLICATIVOS</h2>
                    <p className=' mt-5 text-lg ' >Programa, codifica e testa nas plataformas Android e iOS. Executa a manutenção dos sistemas, fazendo eventuais correções necessárias, visando atender às necessidades dos usuários. Desenvolve trabalhos de montagem, depuração e testes de programas, executando serviços de manutenção nos programas já desenvolvidos.</p>
                </div>

                <div className=' w-[30em] sm:w-[18em] sm:ml-[auto] sm:mr-[auto]  sm2:w-[20em] sm3:w-[24em] md:w-[22em] md:ml-[13em] lg:ml-10 lg:mt-10  border-[3px] border-[blue] py-5 text-center rounded-md hover:shadow-2xl md:hover:scale-105   ' >
                    <div className=' mt-[-2em] ' >
                        <Image src={uiuxIcon} alt="uiuxIcon" width='300px' height='220px' />
                    </div>
                    <h2 className=' text-2xl font-bold text-center sm:text-[20px] mt-[-1em] '>UI | UX</h2>
                    <p className=' mt-5 text-lg ' >O UI Design tem como principal foco a interface de um determinado aplicativo ou site, o UX Design observa esse e outros aspectos, que vão desde o caminho que um usuário faz para chegar ao seu objetivo final até experiências anteriores que uma pessoa teve com aquele produto ou serviço, que podem impactar. </p>
                </div>

                <div className=' w-[30em] sm:w-[18em] sm:ml-[auto] sm:mr-[auto]  sm2:w-[20em] sm3:w-[24em] md:w-[22em] md:ml-[13em] lg:ml-10 lg:mt-10  border-[3px] border-[blue] py-5 text-center rounded-md hover:shadow-2xl md:hover:scale-105   ' >
                    <Image src={sistemasIcon} alt="sistemasIcon" width='150px' height='150px' />
                    <h2 className=' text-2xl font-bold text-center sm:text-[20px] '>DESENVOLVIMENTO DE SISTEMAS</h2>
                    <p className=' mt-5 text-lg ' >Criação de Sistemas e ERP’s, totalmente customizados. Auxilia o gestor da empresa a melhorar os processos internos e integrar as atividades de diferentes setores, como vendas, finanças, estoque e recursos humanos. O resultado é o acesso a insights valiosos, que contribuem para uma tomada de decisão acertada.</p>
                </div>

                <div className=' w-[30em] sm:w-[18em] sm:ml-[auto] sm:mr-[auto]  sm2:w-[20em] sm3:w-[24em] md:w-[22em] md:ml-[13em] lg:ml-10 lg:mt-10  border-[3px] border-[blue] py-5 text-center rounded-md hover:shadow-2xl md:hover:scale-105   ' >
                    <Image src={siteIcon} alt="siteIcon" width='150px' height='150px' />
                    <h2 className=' text-2xl font-bold text-center sm:text-[20px] '>CRIAÇÃO DE SITES E HOTSITES</h2>
                    <p className=' mt-5 text-lg ' >Desenvolvedor de Sites e Hotsites, usando das melhores práticas e tecnologias. Com Layout Profissional e Responsivo, e com todas as características e necessidades do cliente. </p>
                </div>

                <div className=' w-[30em] sm:w-[18em] sm:ml-[auto] sm:mr-[auto]  sm2:w-[20em] sm3:w-[24em] md:w-[22em] md:ml-[13em] lg:ml-10 lg:mt-10  border-[3px] border-[blue] py-5 text-center rounded-md hover:shadow-2xl md:hover:scale-105   ' >
                    <Image src={lpIcon} alt="lpIcon" width='150px' height='150px' />
                    <h2 className=' text-2xl font-bold text-center sm:text-[20px] '>CRIAÇÃO DE LANDING PAGES</h2>
                    <p className=' mt-5 text-lg ' >Landing Page é uma página que possui todos os elementos voltados à conversão do visitante em Lead, oportunidade ou cliente. Também conhecidas como páginas de aterrissagem ou páginas de conversão, as Landing Pages são muito usadas em campanhas de Marketing Digital, pois costumam ter altas taxas de conversão.</p>
                </div>

            </div>

        </div>
    );
}