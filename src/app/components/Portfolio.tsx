"use client"
import React, { Fragment, MouseEventHandler, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';


import siteFreteRapidoImage from 'public/images/SITE_freterapido.png';
import siteFreteRapidoImageOriginal from 'public/images/SITE_freterapidoOriginal.png';
import giroCertoImage from 'public/images/CORTE_FINAL_GIRO_CERTO.png';
import cryptoAppImage from 'public/images/CryptoApp Wallet.png';
import cryptoAppImageOriginal from 'public/images/CryptoApp WalletOriginal.png';
import AppGestaoImage from 'public/images/Aplicativo_de_gestao.png';
import OdontoCareImage from 'public/images/tela_sistema.png';
import ArtworkFiguresImage from 'public/images/ECOMMERCE_Action-Figures.png';
import ArtworkFiguresImageOriginal from 'public/images/ECOMMERCE_Action-FiguresOriginal.png';
import EcommerceVegaImage from 'public/images/ECOMMERCE_VEGA-SHOP.png';
import EcommerceVegaImageOriginal from 'public/images/ECOMMERCE_VEGA-SHOP_Original.png';
import MultinvestImage from 'public/images/LP-MultiInvest.png';
import lpDalacoinImage from 'public/images/lp_DalaCoin.png';
import logisticaImage from 'public/images/logistica.png';
import logisticaImageOriginal from 'public/images/LP_CARGO LOGISTICA.png';


function Portfolio() {

  const [showModalFreteRapido, setShowModalFreteRapido] = React.useState(false);
  const [showModalCryptoWallet, setShowModalCryptoWallet] = React.useState(false);
  const [showModalGiroCerto, setShowModalGiroCerto] = React.useState(false);
  const [showModalAppGestao, setShowModalAppGestao] = React.useState(false);
  const [showModalOdontoCare, setShowModalOdontoCare] = React.useState(false);
  const [showModalArtworkFigures, setShowModalArtworkFigures] = React.useState(false);
  const [showModalEcommerceVega, setShowModalEcommerceVega] = React.useState(false);
  const [showModalMultiInvest, setShowModalMultiInvest] = React.useState(false);
  const [showModalDalaCoin, setShowModalDalaCoin] = React.useState(false);
  const [showModalLogistica, setShowModalLogistica] = React.useState(false);


  return (
    <div>

      <h2 className=' lg:w-100% sm:pl-[3.5rem] sm2:pl-[4rem] lg:pl-[3rem] text-center font-bold text-3xl mb-20 bg-[#00FF80] '>PORTFOLIO</h2>

      <div className="flex flex-wrap sm:ml-[5rem] lg:ml-[8rem] 2xl:ml-[10rem]   ">

        {/*Site Frete Rápido*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalFreteRapido(true)}
          >
            <div className=' sm:w-[11rem] sm360:w-[13.5rem] sm2:w-[14.5rem] sm3:w-[15.5rem] sm4:w-[16.5rem] md:w-[39rem] lg:w-[20rem] xl:w-[30rem] lg:mx-2 mb-10 mt-5 hover:scale-105 cursor-pointer '>
              <Image src={siteFreteRapidoImage} alt='siteFreteRapidoImage' className=' object-contain	' />
            </div>
          </button>
          {showModalFreteRapido ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" pt-[20rem] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" pt-20 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalFreteRapido(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={siteFreteRapidoImageOriginal} alt='siteFreteRapidoImageOriginal' className=' w-[150rem] h-[auto] object-contain sm:pt-[12rem] sm360:pt-[22rem] sm2:pt-[25rem] sm3:pt-[15rem] sm4:pt-[32rem] md:pt-[115rem] lg:pt-[175rem] xl:pt-[175rem] 2xl:pt-[160rem] ' />
                      <h1 className=' pt-10 font-bold text-3xl text-center '>Site Super Frete Rápido</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalFreteRapido(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
        {/*App Giro Certo*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalGiroCerto(true)}
          >
            <div className=' sm:w-[11rem] sm360:w-[13.5rem] sm2:w-[14.5rem] sm3:w-[15.5rem] sm4:w-[16.5rem] md:w-[39rem] lg:w-[20rem] xl:w-[30rem] lg:mx-2 mb-10 mt-5 hover:scale-105 cursor-pointer '>
              <Image src={giroCertoImage} alt='giroCertoImage' className=' object-contain	' />
            </div>
          </button>
          {showModalGiroCerto ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" pt-[20rem] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" pt-20 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalGiroCerto(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={giroCertoImage} alt='giroCertoImage' className=' w-[150rem] h-[auto] object-contain mt-[-20rem] ' />
                      <h1 className=' pt-10 font-bold text-3xl text-center '>App Giro Certo</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalGiroCerto(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
        {/*App Crypto-Wallet*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalCryptoWallet(true)}
          >
            <div className=' sm:w-[11rem] sm360:w-[13.5rem] sm2:w-[14.5rem] sm3:w-[15.5rem] sm4:w-[16.5rem] md:w-[39rem] lg:w-[20rem] xl:w-[30rem] lg:mx-2 mb-10 mt-5 hover:scale-105 cursor-pointer '>
              <Image src={cryptoAppImage} alt='cryptoAppImage' className=' object-contain	' />
            </div>
          </button>
          {showModalCryptoWallet ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" pt-[20rem] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" pt-20 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalCryptoWallet(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={cryptoAppImageOriginal} alt='cryptoAppImageOriginal' className=' w-[150rem] h-[auto] object-contain mt-[-20rem] ' />
                      <h1 className=' pt-10 font-bold text-3xl text-center '>App Crypto Wallet</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalCryptoWallet(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
        {/*App Gestão*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalAppGestao(true)}
          >
            <div className=' sm:w-[11rem] sm360:w-[13.5rem] sm2:w-[14.5rem] sm3:w-[15.5rem] sm4:w-[16.5rem] md:w-[39rem] lg:w-[20rem] xl:w-[30rem] lg:mx-2 mb-10 mt-5 hover:scale-105 cursor-pointer '>
              <Image src={AppGestaoImage} alt='AppGestaoImage' className=' object-contain	' />
            </div>
          </button>
          {showModalAppGestao ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" pt-[20rem] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" pt-20 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalAppGestao(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={AppGestaoImage} alt='AppGestaoImage' className=' w-[150rem] h-[auto] object-contain sm:mt-[-20rem]  2xl:mt-[-24rem] ' />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalAppGestao(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
        {/*OdontoCare*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalOdontoCare(true)}
          >
            <div className=' sm:w-[11rem] sm360:w-[13.5rem] sm2:w-[14.5rem] sm3:w-[15.5rem] sm4:w-[16.5rem] md:w-[39rem] lg:w-[20rem] xl:w-[30rem] lg:mx-2 mb-10 mt-5 hover:scale-105 cursor-pointer '>
              <Image src={OdontoCareImage} alt='OdontoCareImage' className=' object-fill 2xl:w-[40rem] 2xl:h-[15rem]	' />
            </div>
          </button>
          {showModalOdontoCare ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" pt-[20rem] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" pt-20 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalOdontoCare(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={OdontoCareImage} alt='OdontoCareImage' className=' w-[150rem] h-[auto] object-contain mt-[-20rem] ' />
                      <h1 className=' sm2:mt-[5rem] sm360:mt-[5rem] font-bold text-3xl text-center '>Sistema de Atendimento e Gestão Odontológica</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalOdontoCare(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
        {/*Artwork Figures*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalArtworkFigures(true)}
          >
            <div className=' sm:w-[11rem] sm360:w-[13.5rem] sm2:w-[14.5rem] sm3:w-[15.5rem] sm4:w-[16.5rem] md:w-[39rem] lg:w-[20rem] xl:w-[30rem] lg:mx-2 mb-10 mt-5 hover:scale-105 cursor-pointer '>
              <Image src={ArtworkFiguresImage} alt='ArtworkFiguresImage' className=' object-fill w-[50rem] lg:h-[15rem]	' />
            </div>
          </button>
          {showModalArtworkFigures ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" pt-[20rem] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" pt-20 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalArtworkFigures(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={ArtworkFiguresImageOriginal} alt='ArtworkFiguresImageOriginal' className=' w-[150rem] h-[auto] object-contain mt-[-20rem] ' />
                      <h1 className=' pt-10 font-bold text-3xl text-center '>Loja Virtual Artwork Figures</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalArtworkFigures(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
        {/*Ecommerce Vega*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalEcommerceVega(true)}
          >
            <div className=' sm:w-[11rem] sm360:w-[13.5rem] sm2:w-[14.5rem] sm3:w-[15.5rem] sm4:w-[16.5rem] md:w-[39rem] lg:w-[20rem] xl:w-[30rem] lg:mx-2 mb-10 mt-5 hover:scale-105 cursor-pointer '>
              <Image src={EcommerceVegaImage} alt='EcommerceVegaImage' className=' object-fill w-[50rem] h-[17rem]	' />
            </div>
          </button>
          {showModalEcommerceVega ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" pt-[20rem] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" pt-20 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalEcommerceVega(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={EcommerceVegaImageOriginal} alt='EcommerceVegaImageOriginal' className=' w-[150rem] h-[auto] object-contain mt-[-20rem] ' />
                      <h1 className=' pt-12 font-bold text-3xl text-center '>Loja Virtual Vega</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalEcommerceVega(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
        {/* Site Multinvest*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalMultiInvest(true)}
          >
            <div className=' sm:w-[11rem] sm360:w-[13.5rem] sm2:w-[14.5rem] sm3:w-[15.5rem] sm4:w-[16.5rem] md:w-[39rem] lg:w-[20rem] xl:w-[30rem] lg:mx-2 mb-10 mt-5 hover:scale-105 cursor-pointer '>
              <Image src={MultinvestImage} alt='MultinvestImage' className=' object-contain	' />
            </div>
          </button>
          {showModalMultiInvest ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" pt-[20rem] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" pt-20 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalMultiInvest(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={MultinvestImage} alt='MultinvestImage' className=' w-[150rem] h-[auto] object-contain mt-[-20rem] ' />
                      <h1 className=' pt-10 font-bold text-3xl text-center '>Site de Investimento </h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalMultiInvest(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
        {/* Site DalaCoin*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalDalaCoin(true)}
          >
            <div className=' sm:w-[11rem] sm360:w-[13.5rem] sm2:w-[14.5rem] sm3:w-[15.5rem] sm4:w-[16.5rem] md:w-[39rem] lg:w-[20rem] xl:w-[30rem] lg:mx-2 mb-10 mt-5 hover:scale-105 cursor-pointer '>
              <Image src={lpDalacoinImage} alt='lpDalacoinImage' className=' object-contain	' />
            </div>
          </button>
          {showModalDalaCoin ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" pt-[20rem] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" pt-20 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalDalaCoin(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={lpDalacoinImage} alt='lpDalacoinImage' className=' w-[150rem] h-[auto] object-contain mt-[-20rem] ' />
                      <h1 className=' pt-10 font-bold text-3xl text-center '>Site de Criptomoeda </h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalDalaCoin(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
        {/*Site Logistica*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalLogistica(true)}
          >
            <div className=' sm:w-[11rem] sm360:w-[13.5rem] sm2:w-[14.5rem] sm3:w-[15.5rem] sm4:w-[16.5rem] md:w-[39rem] lg:w-[20rem] xl:w-[30rem] lg:mx-2 mb-10 mt-5 hover:scale-105 cursor-pointer '>
              <Image src={logisticaImage} alt='logisticaImage' className=' object-contain	' />
            </div>
          </button>
          {showModalLogistica ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" pt-[20rem] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" pt-20 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalLogistica(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={logisticaImageOriginal} alt='logisticaImageOriginal' className=' w-[150rem] h-[auto] object-contain sm:pt-[-2rem] sm360:pt-[5rem] sm2:pt-[9rem] sm3:pt-[15rem] sm4:pt-[32rem] md:pt-[115rem] lg:pt-[175rem] xl:pt-[175rem] 2xl:pt-[120rem] ' />
                      <h1 className=' pt-10 font-bold text-3xl text-center '>Site de Logística </h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalLogistica(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>


      </div>

    </div>
  )
}

export default Portfolio