import React from "react";
import Image from "next/image";

//Importando Portfolio Imagens
import siteFreteRapido from '../public/img/freterapidosite.png';
import appGiroCerto from '../public/img/CORTE_FINAL_GIRO_CERTO.png'
import cryptoApp from '../public/img/Preview_Final.png'
import agrotechApp from '../public/img/Aplicativo_de_gestao_agrotechApp.png'
import sistema1 from '../public/img/tela_sistema.png'
import ecommerce1 from '../public/img/ECOMMERCE_Action-Figures.png'
import ecommerce2 from '../public/img/SexyVegas_Ecommerce.png'
import lp1 from '../public/img/LP-MultiInvest.png'
import lp2 from '../public/img/lp_DalaCoin.png'
import lp3 from '../public/img/CARGO_LOGISTICA.png'

const Tabs = () => {

  function zoomin() {
    let width = 600;
    console.log('Imagem foi clicada.')
  }

  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full ">
          <h1 className=' text-center text-4xl bg-tab font-[600] mb-10 '>PORTFOLIO</h1>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-blue bg-[#3ABEFF]"
                    : "text-blueGray-600 bg-blue")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Todos
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-blue bg-[#3ABEFF]"
                    : "text-blueGray-600 bg-blue")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Sites
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-blue bg-[#3ABEFF]"
                    : "text-blueGray-600 bg-blue")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Sistemas
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-blue bg-[#3ABEFF]"
                    : "text-blueGray-600 bg-blue")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Aplicativos
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-blue bg-[#3ABEFF]"
                    : "text-blueGray-600 bg-blue")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                E-Commerce
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "text-blue bg-[#3ABEFF]"
                    : "text-blueGray-600 bg-blue")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                Landing Pages
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-blue w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " onClick={zoomin} >
                    <Image src={siteFreteRapido} alt="freterapidosite" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={appGiroCerto} alt="appGiroCerto" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={cryptoApp} alt="cryptoApp" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={agrotechApp} alt="agrotechApp" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={sistema1} alt="sistema1" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={ecommerce1} alt="ecommerce1" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={ecommerce2} alt="ecommerce2" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={lp1} alt="lp1" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={lp2} alt="lp2" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={lp3} alt="lp3" layout="intrinsic" />
                  </div>


                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={siteFreteRapido} alt="freterapidosite" layout="intrinsic" />
                  </div>

                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={sistema1} alt="sistema1" layout="intrinsic" />
                  </div>
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={appGiroCerto} alt="appGiroCerto" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={cryptoApp} alt="cryptoApp" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={agrotechApp} alt="agrotechApp" layout="intrinsic" />
                  </div>
                </div>

                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={ecommerce1} alt="ecommerce1" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={ecommerce2} alt="ecommerce2" layout="intrinsic" />
                  </div>
                </div>

                <div className={openTab === 6 ? "block" : "hidden"} id="link5">
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={lp1} alt="lp1" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={lp2} alt="lp2" layout="intrinsic" />
                  </div>
                  <div className=" xl:flex xl:ml-[15em] xl:w-[85em] xl:ml-auto xl:mr-auto " >
                    <Image src={lp3} alt="lp3" layout="intrinsic" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;

