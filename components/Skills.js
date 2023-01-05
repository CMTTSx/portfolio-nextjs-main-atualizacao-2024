import React from 'react';

import Image from 'next/image';

//Import Icons
import htmlIcon from '../public/img/html5iconNew.png'
import cssIcon from '../public/img/css3icon.png'
import jsIcon from '../public/img/jsquarter.png'
import tsIcon from '../public/img/typescript.jpeg'
import reactIcon from '../public/img/reactIcon.png'
import nextIcon from '../public/img/nextjs_logo.png'
import tailwindIcon from '../public/img/Tailwind.jpg'
import styledIcon from '../public/img/styledComponents.png'
import bootstrapIcon from '../public/img/bootstrap_icon.png'
import muiIcon from '../public/img/MaterialUIicon.png'
import mysqlIcon from '../public/img/MySQL-Logo.png'
import postgreIcon from '../public/img/postgresql_icon.png'
import mongoIcon from '../public/img/mongodb_icon.png'
import sequelizeIcon from '../public/img/sequelizeicon.png'
import mongooseIcon from '../public/img/mongoose.png'
import firebaseIcon from '../public/img/firebase.png'
import nodeIcon from '../public/img/nodejs.jpg'
import expressIcon from '../public/img/expressjsicon.png'
import apiIcon from '../public/img/apirestIcon.png'
import googleIcon from '../public/img/google_cloud.png'
import awsIcon from '../public/img/aws_icon.png'
import herokuIcon from '../public/img/heroku.png'
import npmIcon from '../public/img/npmicon.png'
import yarnIcon from '../public/img/yarnicon.png'
import reactnativeIcon from '../public/img/reactnative.png'
import protoIcon from '../public/img/protolayout.png'
import usabilidadeIcon from '../public/img/usabilidade_icon.png'
import acessibilidadeIcon from '../public/img/acessibilidade.png'
import figmaIcon from '../public/img/figmaIcon.png'
import githubIcon from '../public/img/GitHub.png'
import photoIcon from '../public/img/photoshop.png'
import linuxIcon from '../public/img/Linux2.png'
import Link from 'next/link';




export default function Skills() {
  return (
    <div>
      <h1 className=' text-center text-4xl bg-tab font-[600] '>HABILIDADES</h1>

      <h3 className=' border-[1px] text-center text-3xl font-bold bg-[#F2EFEA] '>FRONT-END</h3>

      <div className="grid grid-cols-10 flex flex-wrap  gap-20 sm:w-[18em] sm2:w-[20em] sm3:w-[22em] md:w-[45em] lg:w-[50em] lg:ml-[6em] md:ml-[1.5em] sm:ml-[auto] sm:mr-[auto] mt-10 mb-20  sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 md:gap-20 lg:gap-20 xl:grid-row-10 xl:gap-10 xl:ml-[auto] xl:mr-[auto] xl:w-[60em] ">
        <div className=' border-[1px] cursor-pointer ' title='HTML, versão 5, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.' ><Image src={htmlIcon} alt="html5" width='200px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Com o CSS, versão 3. Pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.' ><Image src={cssIcon} alt="cssIcon" width='200px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer ' title='JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.' ><Image src={jsIcon} alt="jsIcon" width='200px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer ' title='TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. Tipos fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documentação e permitindo que o TypeScript valide se seu código está funcionando corretamente.' ><Image src={tsIcon} alt="tsIcon" width='200px' height='210px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. ' ><Image src={reactIcon} alt="reactIcon" width='200px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React ' ><Image src={nextIcon} alt="nextIcon" width='200px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-10 ' title='O Tailwind é uma coleção de componentes de interface do usuário bonitos e totalmente responsivos, projetados e desenvolvidos por nós, os criadores do Tailwind CSS. Ele tem centenas de exemplos prontos para usar e é garantido para ajudá-lo a encontrar o ponto de partida perfeito para o que você deseja construir. ' ><Image src={tailwindIcon} alt="tailwindIcon" width='200px' height='120px' className='hover:scale-110 ' /></div>
        <div className=' cursor-pointer              ' title='O estilo permite que você use a sintaxe CSS real dentro de seus componentes. Componentes com estilo é uma variante do “CSS-in-JS” – que resolve muitos dos problemas com o CSS tradicional. Um dos problemas mais importantes que eles resolvem são as colisões de nomes de seletores. Com CSS tradicional, você deve ter cuidado para não sobrescrever seletores CSS usados em outro lugar em um site porque todos os seletores CSS vivem no mesmo namespace global. Essa restrição infeliz pode levar a esquemas de nomenclatura de seletor elaborados (e muitas vezes confusos). ' ><Image src={styledIcon} alt="styledIcon" width='210px' height='220px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo. ' ><Image src={bootstrapIcon} alt="bootstrapIcon" width='200px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Biblioteca de componentes React para um desenvolvimento ágil e fácil. Construa seu próprio design, ou comece com Material Design. ' ><Image src={muiIcon} alt="muiIcon" width='210px' height='200px' className='hover:scale-110 ' /></div>

      </div>

      <h3 className=' border-[1px] text-center text-3xl font-bold bg-[#F2EFEA] '>BASE DE DADOS</h3>
      <div className="grid grid-cols-10 flex flex-wrap  gap-5 sm:w-[18em] sm2:w-[20em] sm3:w-[22em] md:w-[45em] lg:w-[50em] lg:ml-[6em] md:ml-[1.5em] sm:ml-[auto] sm:mr-[auto] mt-10 mb-20  sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 md:gap-20 lg:gap-20 xl:grid-row-10 xl:gap-10 xl:ml-[auto] xl:mr-[auto] xl:w-[60em] ">
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-4 ' title='O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.' ><Image src={mysqlIcon} alt="mysqlIcon" width='200px' height='150px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-5 ' title='PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.' ><Image src={postgreIcon} alt="postgreIcon" width='350px' height='240px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-2 ' title='MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.' ><Image src={mongoIcon} alt="mongoIcon" width='350px' height='350px' className='hover:scale-105' /></div>
        <div className=' border-[1px] cursor-pointer ' title='O Sequelize é um ORM(Object/Relational Mapper) baseado em Promise para Node. js e io. js, e suporta os dialetos PostgreSQL, MySQL, MariaDB, SQLite e MSSQL e recursos a transação, relacionamentos, replicação de leitura e muito mais.' ><Image src={sequelizeIcon} alt="sequelizeIcon" width='200px' height='200px' className='hover:scale-105 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-2 ' title='O Mongoose é um ODM e fornece uma solução direta e baseada em esquema para modelar seus dados de aplicativos. Ele inclui conversão de tipo integrada, validação, criação de consulta, ganchos de lógica de negócios e muito mais, prontos para uso. ' ><Image src={mongooseIcon} alt="mongooseIcon" width='400px' height='320px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-5 ' title='Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web. Era originalmente uma empresa independente fundada em 2011. Em 2014, o Google adquiriu a plataforma e agora é sua oferta principal para o desenvolvimento de aplicativos.' ><Image src={firebaseIcon} alt="firebaseIcon" width='300px' height='200px' className='hover:scale-110' /></div>
      </div>

      <h3 className=' border-[1px] text-center text-3xl font-bold bg-[#F2EFEA] '>BACK-END</h3>
      <div className="grid grid-cols-10 flex flex-wrap  gap-5 sm:w-[18em] sm2:w-[20em] sm3:w-[22em] md:w-[45em] lg:w-[50em] lg:ml-[6em] md:ml-[1.5em] sm:ml-[auto] sm:mr-[auto] mt-10 mb-20  sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 md:gap-20 lg:gap-20 xl:grid-row-10 xl:gap-10 xl:ml-[auto] xl:mr-[auto] xl:w-[60em] ">
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-7 ' title='Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.' ><Image src={nodeIcon} alt="nodeIcon" width='300px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-7 ' title='Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js.' ><Image src={expressIcon} alt="expressIcon" width='300px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-7 ' title='API RESTful é uma interface que fornece dados em um formato padronizado baseado em requisições HTTP. Ela fornece dados para essas aplicações, facilitando o cadastro e o acesso. API RESTful fica parada até que acontece uma requisição.' ><Image src={apiIcon} alt="apiIcon" width='300px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-5 ' title='O Google Cloud Platform possibilita a criação de aplicativos e sites web mais otimizados, resultando no crescimento do seu negócio. Assim, a empresa pode desenvolver funções com finalidades únicas, capazes de responder aos eventos em nuvem.' ><Image src={googleIcon} alt="googleIcon" width='300px' height='210px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-8 ' title='A Amazon Web Services (ou AWS) existe de 2006 e oferece serviços de infraestrutura de TI para empresas por meio de serviços web – a chamada computação na nuvem, que nos dá a chance de trocar altos gastos com infraestrutura por preços que cabem no bolso. ' ><Image src={awsIcon} alt="awsIcon" width='300px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-7 ' title='Heroku é uma plataforma em nuvem como um serviço que suporta várias linguagens de programação. Uma das primeiras plataformas em nuvem, o Heroku está em desenvolvimento desde junho de 2007, quando suportava apenas a linguagem de programação Ruby, mas agora suporta Java, Node.js, Scala, Clojure, Python, PHP e Go.' ><Image src={herokuIcon} alt="herokuIcon" width='200px' height='120px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-5 ' title='npm é um gerenciador de pacotes para o Node.JS npm, Inc. é uma subsidiária do GitHub, que fornece hospedagem para desenvolvimento de software e controle de versão com o uso do Git. npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js. ' ><Image src={npmIcon} alt="npmIcon" width='350px' height='220px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Yarn é um sistema de empacotamento de software desenvolvido em 2016 pelo Facebook para Node.js JavaScript runtime environment que fornece velocidade, consistência, estabilidade e segurança como uma alternativa ao npm (gerenciador de pacotes).' ><Image src={yarnIcon} alt="yarnIcon" width='200px' height='200px' className='hover:scale-110 ' /></div>


      </div>

      <h3 className=' border-[1px] text-center text-3xl font-bold bg-[#F2EFEA] '>DESENVOLVIMENTO MOBILE</h3>
      <div className="grid grid-cols-10 flex flex-wrap  gap-5 sm:w-[18em] sm2:w-[20em] sm3:w-[22em] md:w-[45em] lg:w-[50em] lg:ml-[6em] md:ml-[1.5em] sm:ml-[auto] sm:mr-[auto] mt-10 mb-20  sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 md:gap-20 lg:gap-20 xl:grid-row-10 xl:gap-10 xl:ml-[auto] xl:mr-[auto] xl:w-[60em] ">
        <div className=' border-[1px] cursor-pointer ' title='React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.' ><Image src={reactnativeIcon} alt="reactnativeIcon" width='500px' height='500px' className='hover:scale-110 ' /></div>
      </div>

      <h3 className=' border-[1px] text-center text-3xl font-bold bg-[#F2EFEA] '>TECNOLOGIAS RELACIONADAS</h3>
      <div className="grid grid-cols-10 flex flex-wrap  gap-5 sm:w-[18em] sm2:w-[20em] sm3:w-[22em] md:w-[45em] lg:w-[50em] lg:ml-[6em] md:ml-[1.5em] sm:ml-[auto] sm:mr-[auto] mt-10 mb-20  sm:grid-cols-2 md:grid-cols-4 md:gap-10 lg:grid-cols-5 md:gap-20 lg:gap-20 xl:grid-row-10 xl:gap-10 xl:ml-[auto] xl:mr-[auto] xl:w-[60em] ">
        <div className=' border-[1px] cursor-pointer ' title='A prototipagem é a quarta e última fase do processo de Design Thinking e tem como função validar as ideias geradas na fase anterior, a Ideação. É o momento de unir propostas, refinar conceitos e colocar a mão na massa. Seu objetivo é revelar problemas de design, usabilidade ou adequação.' ><Image src={protoIcon} alt="protoIcon" width='300px' height='300px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer ' title='A usabilidade visa assegurar que produtos sejam fáceis de aprender a usar, eficazes e agradáveis, sempre na perspectiva do usuário. Não é apenas facilidade de uso, mas também trazer algo significativo, tendo um objetivo em comum com o usuário.' ><Image src={usabilidadeIcon} alt="usabilidadeIcon" width='300px' height='300px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer ' title='No contexto do software, o teste de acessibilidade é um processo para avaliar a usabilidade do sistema por pessoas que enfrentam algum tipo de restrição que podem ser permanentes, como uma deficiência, temporárias, como um dedo quebrado ou situacionais, como usar a aplicação enquanto segura uma criança.' ><Image src={acessibilidadeIcon} alt="acessibilidadeIcon" width='300px' height='300px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-10 ' title='Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.' ><Image src={figmaIcon} alt="figmaIcon" width='350px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-10 ' title='GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.' ><Image src={githubIcon} alt="githubIcon" width='350px' height='200px' className='hover:scale-110' /></div>
        <div className=' border-[1px] cursor-pointer ' title='Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster desenvolvido pela Adobe Systems. É considerado o líder no mercado dos editores de imagem profissionais, assim como o programa de facto para edição profissional de imagens digitais e trabalhos de pré-impressão.' ><Image src={photoIcon} alt="photoIcon" width='200px' height='200px' className='hover:scale-110 ' /></div>
        <div className=' border-[1px] cursor-pointer mt-[0.01em] pt-10 ' title='Linux é um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o Kernel Linux. O núcleo foi desenvolvido pelo programador finlandês Linus Torvalds, inspirado no sistema Minix. ' ><Image src={linuxIcon} alt="linuxIcon" width='350px' height='200px' className='hover:scale-110 ' /></div>


      </div>

    </div>
  );
}
