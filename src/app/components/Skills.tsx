import Image from 'next/image';

import html5Icon from 'public/images/html5.svg';
import cssIcon from 'public/images/css3.svg';
import javascriptIcon from 'public/images/javascript.svg';
import typescriptIcon from 'public/images/typescript.svg';
import reduxIcon from 'public/images/redux.svg';
import reactIcon from 'public/images/react-js.svg';
import nextjsIcon from 'public/images/nextjs-logo.svg';
import tailwindIcon from 'public/images/TailwindLogo.svg';
import styledComponents from 'public/images/styled-components.svg';
import bootstrap from 'public/images/bootstrap.svg';
import materialUi from 'public/images/material-ui.svg';
import materialDesign from 'public/images/materialDesign.svg';
import mysqlIcon from 'public/images/mysql.svg';
import postgresIcon from 'public/images/postgres.svg';
import mongodbIcon from 'public/images/mongodb.svg';
import typeormIcon from 'public/images/typeorm.svg';
import prismaIcon from 'public/images/prisma.svg';
import sequelizeIcon from 'public/images/sequelize.svg';
import mongooseIcon from 'public/images/mongoose.png';
import firebaseIcon from 'public/images/firebase.svg';
import hibernateIcon from 'public/images/hibernate.svg';
import nodeIcon from 'public/images/node.svg';
import expressIcon from 'public/images/express.svg';
import nestJsIcon from 'public/images/nestjs.svg';
import javaIcon from 'public/images/java.svg';
import restApiIcon from 'public/images/restApi.svg';
import reactNativeIcon from 'public/images/react-native.svg';
import prototipacaoIcon from 'public/images/prototipacao.png';
import usabilidadeIcon from 'public/images/usabilidade.png';
import figmaIcon from 'public/images/figma.svg';
import acessibilidadeIcon from 'public/images/acessibilidade.png';
import githubIcon from 'public/images/github.svg';
import photoshopIcon from 'public/images/photoshop.png';
import linuxIcon from 'public/images/linux.png';
import notionIcon from 'public/images/notion.svg';
import lucidchartIcon from 'public/images/lucidchart.webp';
import npmIcon from 'public/images/npm.svg';
import yarnIcon from 'public/images/yarn.webp';
import jestIcon from 'public/images/jest.svg';
import googleCloudIcon from 'public/images/google-cloud.webp';
import awsIcon from 'public/images/aws.svg';
import vercelIcon from 'public/images/vercel.webp';
import herokuIcon from 'public/images/heroku.svg';
import dockerIcon from 'public/images/docker.svg';
import postmanIcon from 'public/images/postman.svg';
import jUnitIcon from 'public/images/JUnit.webp';
import mavenIcon from 'public/images/maven.svg';
import swaggerIcon from 'public/images/swagger.svg';
import pythonIcon from 'public/images/python.png';
import javafxIcon from 'public/images/Javafx.png';

function Skills() {
  return (
    <div id="habilidades" className=' sm:ml-[4rem] lg:ml-[3.3%] min-w-320 ' >

      <h2 className=' sm:text-center sm:mt-20 font-bold text-3xl mb-10 bg-[#00FF80] '>HABILIDADES</h2>

      <h2 className=' font-bold text-2xl mb-20 text-center bg-[#f0f0f0] '>FRONT-END</h2>

      <div className=" mb-10 md:pl-[5.5rem] lg:pl-[5rem] lg:pr-[5rem] xl:pl-[10rem] 2xl:pl-[10rem] 2xl:pr-[6rem] gap-20 sm:flex sm:flex-col md:grid grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-9 flex-wrap ">

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='HTML, versão 5, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.'
        ><Image src={html5Icon} alt='html5Icon' className=' sm:w-[80%] mx-auto pt-3 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Com o CSS, versão 3. Pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.' >
          <Image src={cssIcon} alt='cssIcon' className=' sm:w-[60%] mx-auto pt-4 ' />
        </div>

        <div className=' sm:w-[10rem] sm:mx-auto md:mx-0 2xl:w-[10rem] 2xl:h-[10rem] hover:scale-110 cursor-pointer '
          title='JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'>
          <Image src={javascriptIcon} alt='javascriptIcon' className=' 2xl:w-[12rem] 2xl:h-[12rem] mx-auto ' />
        </div>

        <div className=' sm:w-[10rem] sm:mx-auto md:mx-0 2xl:w-[10rem] 2xl:h-[10rem] hover:scale-110 cursor-pointer '
          title='TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. Tipos fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documentação e permitindo que o TypeScript valide se seu código está funcionando corretamente.'       ><Image src={typescriptIcon} alt='typescriptIcon' className=' 2xl:w-[12rem] 2xl:h-[12rem] mx-auto' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Redux é uma biblioteca para armazenamento de estados de aplicações JavaScript, criado por Dan Abramov. Ele nasceu através de uma implementação do Flux, uma arquitetura criada pelo Facebook para contribuir com as aplicações de User Interface, utilizando o conceito de fluxo de dados unidirecional. Quando desenvolvemos aplicações utilizando Javascript, sempre temos que lidar com o gerenciamento de estado. O Redux veio para suprir essa necessidade de simplificar o controle dos estados de uma aplicação. Compartilhar estados entre vários componentes diferentes se torna uma coisa muito fácil quando o utilizamos.'
        ><Image src={reduxIcon} alt='reduxIcon' className=' sm:w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4 font-bold ' >Redux</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
        ><Image src={reactIcon} alt='reactIcon' className=' sm:w-[50%] mx-auto pt-7 ' />
          <h5 className='text-center pt-4 font-bold '>React</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.' >
          <Image src={nextjsIcon} alt='nextjsIcon' className=' sm:w-[80%] mx-auto pt-[4rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='O Tailwind é uma coleção de componentes de interface do usuário bonitos e totalmente responsivos, projetados e desenvolvidos por nós, os criadores do Tailwind CSS. Ele tem centenas de exemplos prontos para usar e é garantido para ajudá-lo a encontrar o ponto de partida perfeito para o que você deseja construir.'
        ><Image src={tailwindIcon} alt='tailwindIcon' className=' sm:w-[80%] mx-auto pt-[4.4rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.'
        ><Image src={bootstrap} alt='bootstrap' className='  w-[60%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4 font-bold '>Bootstrap</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Biblioteca de componentes React para um desenvolvimento ágil e fácil. Construa seu próprio design.'
        ><Image src={materialUi} alt='materialUi' className=' sm:w-[60%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4 font-bold '>Material UI</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Material Design (codinomeado Quantum Paper) é uma linguagem de design livre desenvolvida pela Google com o objetivo de unificar e padronizar as interfaces gráficas dos sistemas da empresa (conjunto de diretrizes ou guidelines), anunciado em 2014 como uma melhoria no "card" do assistente pessoa.'
        ><Image src={materialDesign} alt='materialDesign' className=' sm:w-[50%] mx-auto pt-2 ' />
          <h5 className='text-center pt-4 font-bold '>Material Design</h5>
        </div>

      </div>


      <h2 className=' font-bold text-2xl sm:mt-[5rem] md:mt-[-40rem] lg:mt-[-80rem] mb-20 text-center bg-[#f0f0f0] mt-[-85rem] '>BASE DE DADOS</h2>

      <div className=" sm:mt-[5rem] md:pl-[5.5rem] lg:pl-[5rem] lg:pr-[5rem] xl:pl-[10rem] 2xl:pl-[10rem] 2xl:pr-[6rem] gap-20 sm:flex sm:flex-col md:grid grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-9 flex-wrap ">

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.' >
          <Image src={mysqlIcon} alt='mysqlIcon' className=' w-[100%] mx-auto pt-10  ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.' >
          <Image src={postgresIcon} alt='postgresIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.' >
          <Image src={mongodbIcon} alt='mongodbIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='TypeORM é um ORM que pode ser executado nas plataformas NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo e Electron e pode ser usado com TypeScript e JavaScript (ES5, ES6, ES7, ES8). Seu objetivo é sempre oferecer suporte aos recursos JavaScript mais recentes e fornecer recursos adicionais que o ajudem a desenvolver qualquer tipo de aplicativo que use bancos de dados - desde pequenos aplicativos com algumas tabelas até aplicativos corporativos de grande escala com vários bancos de dados.' >
          <Image src={typeormIcon} alt='typeormIcon' className=' w-[50%] mx-auto pt-7 ' />
          <h5 className='text-center pt-4 font-bold '>Type ORM</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Prisma é um Node.js e TypeScript ORM de próxima geração para PostgreSQL, MySQL, SQL Server, SQLite, MongoDB e CockroachDB. Ele fornece segurança de tipo, migrações automatizadas e um modelo de dados intuitivo.' >
          <Image src={prismaIcon} alt='prismaIcon' className=' w-[80%] mx-auto pt-12 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='O Sequelize é um ORM(Object/Relational Mapper) baseado em Promise para Node. js e io. js, e suporta os dialetos PostgreSQL, MySQL, MariaDB, SQLite e MSSQL e recursos a transação, relacionamentos, replicação de leitura e muito mais.'>
          <Image src={sequelizeIcon} alt='sequelizeIcon' className=' w-[80%] mx-auto pt-12 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='O Mongoose é um ODM e fornece uma solução direta e baseada em esquema para modelar seus dados de aplicativos. Ele inclui conversão de tipo integrada, validação, criação de consulta, ganchos de lógica de negócios e muito mais, prontos para uso.'>
          <Image src={mongooseIcon} alt='mongooseIcon' className=' w-[100%] mx-auto pt-7 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web. Era originalmente uma empresa independente fundada em 2011. Em 2014, o Google adquiriu a plataforma e agora é sua oferta principal para o desenvolvimento de aplicativos.' >
          <Image src={firebaseIcon} alt='firebaseIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='O Hibernate é um framework para o mapeamento objeto-relacional escrito na linguagem Java, mas também é disponível em .Net com o nome NHibernate. Este framework facilita o mapeamento dos atributos entre uma base tradicional de dados relacionais e o modelo objeto de uma aplicação, mediante o uso de arquivos (XML) ou anotações Java (veja Annotation (java)).' >
          <Image src={hibernateIcon} alt='hibernateIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>


      </div>

      <h2 className=' font-bold text-2xl sm:mt-[5rem] md:mt-[-40rem] lg:mt-[-80rem] mb-20 text-center bg-[#f0f0f0] mt-[-85rem] '>BACK-END</h2>

      <div className=" sm:mt-[5rem] md:pl-[5.5rem] lg:pl-[5rem] lg:pr-[5rem] xl:pl-[10rem] 2xl:pl-[10rem] 2xl:pr-[6rem] gap-20 sm:flex sm:flex-col md:grid grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-9 flex-wrap ">

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='API RESTful é uma interface que fornece dados em um formato padronizado baseado em requisições HTTP. Ela fornece dados para essas aplicações, facilitando o cadastro e o acesso. API RESTful fica parada até que acontece uma requisição.' >
          <Image src={restApiIcon} alt='restApiIcon' className=' w-[50%] mx-auto pt-10  ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.' >
          <Image src={nodeIcon} alt='nodeIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js.' >
          <Image src={expressIcon} alt='expressIcon' className=' w-[100%] mx-auto pt-10  ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor. Foi criado por Kamil Mysliwiec e lançado em 2017. Sob o capô, por padrão, o NestJS faz uso do framework Express.js, sendo também compatível com o Fastify. Sua arquitetura é fortemente inspirada no Angular.' >
          <Image src={nestJsIcon} alt='nestJsIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.' >
          <Image src={javaIcon} alt='javaIcon' className=' w-[50%] mx-auto  ' />
        </div>

      </div>

      <h2 className=' font-bold text-2xl sm:mt-[5rem] md:mt-[-40rem] lg:mt-[-95rem] mb-20 text-center bg-[#f0f0f0] mt-[-85rem] '>DESENVOLVIMENTO MOBILE</h2>


      <div className=" sm:mt-[5rem] md:pl-[5.5rem] lg:pl-[5rem] lg:pr-[5rem] xl:pl-[10rem] 2xl:pl-[10rem] 2xl:pr-[6rem] gap-20 sm:flex sm:flex-col md:grid grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-9 flex-wrap ">

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.' >
          <Image src={reactNativeIcon} alt='reactNativeIcon' className=' w-[100%] mx-auto  ' />
        </div>

      </div>

      <h2 className=' font-bold text-2xl sm:mt-[5rem] md:mt-[-40rem] lg:mt-[-110rem] mb-20 text-center bg-[#f0f0f0] mt-[-85rem] '>TECNOLOGIAS RELACIONADAS</h2>


      <div className=" sm:mt-[5rem] md:pl-[5.5rem] lg:pl-[5rem] lg:pb-[10rem] lg:pr-[5rem] xl:pl-[10rem] 2xl:pl-[10rem] 2xl:pr-[6rem] gap-20 sm:flex sm:flex-col md:grid grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-9 flex-wrap ">

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='A prototipagem é a quarta e última fase do processo de Design Thinking e tem como função validar as ideias geradas na fase anterior, a Ideação. É o momento de unir propostas, refinar conceitos e colocar a mão na massa. Seu objetivo é revelar problemas de design, usabilidade ou adequação.' >
          <Image src={prototipacaoIcon} alt='prototipacaoIcon' className=' w-[50%] mx-auto pt-5' />
          <h5 className='text-center pt-4' >Prototipação</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='A usabilidade visa assegurar que produtos sejam fáceis de aprender a usar, eficazes e agradáveis, sempre na perspectiva do usuário. Não é apenas facilidade de uso, mas também trazer algo significativo, tendo um objetivo em comum com o usuário.' >
          <Image src={usabilidadeIcon} alt='usabilidadeIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Usabilidade</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='No contexto do software, o teste de acessibilidade é um processo para avaliar a usabilidade do sistema por pessoas que enfrentam algum tipo de restrição que podem ser permanentes, como uma deficiência, temporárias, como um dedo quebrado ou situacionais, como usar a aplicação enquanto segura uma criança.' >
          <Image src={acessibilidadeIcon} alt='acessibilidadeIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Acessibilidade</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.'>
          <Image src={figmaIcon} alt='figmaIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Figma</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.' >
          <Image src={githubIcon} alt='githubIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Github</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster desenvolvido pela Adobe Systems. É considerado o líder no mercado dos editores de imagem profissionais, assim como o programa de facto para edição profissional de imagens digitais e trabalhos de pré-impressão.' >
          <Image src={photoshopIcon} alt='photoshopIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Photoshop</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Linux é um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o Kernel Linux. O núcleo foi desenvolvido pelo programador finlandês Linus Torvalds, inspirado no sistema Minix. ' >
          <Image src={linuxIcon} alt='linuxIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Gerencie qualquer tipo de projeto com mais eficiência sem precisar de um sistema ultrapassado.' >
          <Image src={notionIcon} alt='notionIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Notion</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Diagramas de classes UML mapeiam a estrutura de um determinado sistema modelando suas classes, seus atributos, operações e relações entre objetos.' >
          <Image src={lucidchartIcon} alt='lucidchartIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='npm é um gerenciador de pacotes para o Node.JS npm, Inc. é uma subsidiária do GitHub, que fornece hospedagem para desenvolvimento de software e controle de versão com o uso do Git. npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js.' >
          <Image src={npmIcon} alt='npmIcon' className=' w-[80%] mx-auto pt-10 ' />
        </div>

        <div className=' sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer bg-[#147bac] '
          title='Yarn é um sistema de empacotamento de software desenvolvido em 2016 pelo Facebook para Node.js JavaScript runtime environment que fornece velocidade, consistência, estabilidade e segurança como uma alternativa ao npm (gerenciador de pacotes).' >
          <Image src={yarnIcon} alt='yarnIcon' className=' w-[70%] mx-auto pt-5 ' />
          <h5 className='text-center text-white '>Yarn</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.' >
          <Image src={jestIcon} alt='jestIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Jest</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='O Google Cloud Platform possibilita a criação de aplicativos e sites web mais otimizados, resultando no crescimento do seu negócio. Assim, a empresa pode desenvolver funções com finalidades únicas, capazes de responder aos eventos em nuvem.' >
          <Image src={googleCloudIcon} alt='googleCloudIcon' className=' w-[80%] mx-auto pt-[4.5rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='A Amazon Web Services (ou AWS) existe de 2006 e oferece serviços de infraestrutura de TI para empresas por meio de serviços web – a chamada computação na nuvem, que nos dá a chance de trocar altos gastos com infraestrutura por preços que cabem no bolso. '>
          <Image src={awsIcon} alt='awsIcon' className=' w-[50%] mx-auto pt-[4rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='O Frontend Cloud da Vercel oferece aos desenvolvedores estruturas, fluxos de trabalho e infraestrutura para construir uma Web mais rápida e personalizada.' >
          <Image src={vercelIcon} alt='vercelIcon' className=' w-[90%] mx-auto pt-[4rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Heroku é uma plataforma em nuvem como um serviço que suporta várias linguagens de programação. Uma das primeiras plataformas em nuvem, o Heroku está em desenvolvimento desde junho de 2007, quando suportava apenas a linguagem de programação Ruby, mas agora suporta Java, Node.js, Scala, Clojure, Python, PHP e Go.'>
          <Image src={herokuIcon} alt='herokuIcon' className=' w-[90%] mx-auto pt-[3rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Docker é um conjunto de produtos de plataforma como serviço (PaaS) que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração. Eles podem se comunicar uns com os outros por meio de canais bem definidos. Todos os contêineres são executados por um único kernel do sistema operacional e, portanto, usam menos recursos do que as máquinas virtuais.' >
          <Image src={dockerIcon} alt='dockerIcon' className=' w-[90%] mx-auto pt-5 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Postman é uma plataforma de API para desenvolvedores projetarem, construírem, testarem e iterarem suas APIs. Em fevereiro de 2023, o Postman relata ter mais de 25 milhões de usuários registrados e 75.000 APIs abertas, o que, segundo ele, constitui o maior hub público de APIs do mundo. A empresa está sediada em San Francisco e mantém um escritório em Bangalore, onde foi fundada.' >
          <Image src={postmanIcon} alt='postmanIcon' className=' w-[90%] mx-auto pt-[3rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='O JUnit é um framework open-source, que se assemelha ao raio de testes software java, criado por Erich Gamma e Kent Beck, com suporte à criação de testes automatizados na linguagem de programação Java.' >
          <Image src={jUnitIcon} alt='jUnitIcon' className=' w-[90%] mx-auto pt-[3.5rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Apache Maven, ou Maven, é uma ferramenta de automação de compilação utilizada primariamente em projetos Java. Ela é similar à ferramenta Ant, mas é baseada em conceitos e trabalhos diferentes em um modo diferente. ' >
          <Image src={mavenIcon} alt='mavenIcon' className=' w-[90%] mx-auto pt-2 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title='Swagger é um conjunto de ferramentas para desenvolvedores de API da SmartBear Software e uma especificação anterior na qual a especificação OpenAPI se baseia. O projeto Swagger API foi criado em 2011 por Tony Tam, cofundador técnico do site de dicionários Wordnik.' >
          <Image src={swaggerIcon} alt='swaggerIcon' className=' w-[60%] mx-auto pt-5 ' />
          <h5 className='text-center pt-1 ' >Swagger</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title=' Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991. ' >
          <Image src={pythonIcon} alt='pythonIcon' className=' w-[60%] mx-auto pt-[4rem] ' />
        </div>

      </div>

    </div>

  )
}

export default Skills