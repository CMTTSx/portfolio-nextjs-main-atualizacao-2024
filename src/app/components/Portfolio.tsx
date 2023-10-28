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
    <div className=' w-full border-4 text-center ' >

      <h2 className=' w-[100%] text-center font-bold text-3xl mb-20 bg-[#00FF80] '>PORTFOLIO</h2>

      <div className="flex flex-wrap mx-[3rem]   ">

{/*Site Frete Rápido*/}
        <>
          <button
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalFreteRapido(true)}
          >
            <div className=' border-4 mx-5 mb-10  hover:scale-110 cursor-pointer '>
              <Image src={siteFreteRapidoImage} alt='siteFreteRapidoImage' className=' object-cover w-[500px] h-[350px]	' />
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
                      <Image src={siteFreteRapidoImageOriginal} alt='siteFreteRapidoImageOriginal' className=' w-[150rem] h-[auto] object-contain pt-[135rem] ' />
                      <h1 className=' pt-10 font-bold text-3xl '>Site Super Frete Rápido</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
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
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalGiroCerto(true)}
          >
            <div className=' border-4 mx-5 mb-10  hover:scale-110 cursor-pointer '>
              <Image src={giroCertoImage} alt='giroCertoImage' className=' object-cover w-[500px] h-[350px]	' />
            </div>
          </button>
          {showModalGiroCerto ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalGiroCerto(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={giroCertoImage} alt='giroCertoImage' className=' w-[150rem] h-[auto] object-contain ' />
                      <h1 className=' pt-10 font-bold text-3xl '>App Giro Certo</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
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
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalCryptoWallet(true)}
          >
            <div className=' border-4 mx-5 mb-10  hover:scale-110 cursor-pointer '>
              <Image src={cryptoAppImage} alt='cryptoAppImage' className=' object-contain w-[500px] h-[350px] bg-[#e0e2e4]	' />
            </div>
          </button>
          {showModalCryptoWallet ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalCryptoWallet(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={cryptoAppImageOriginal} alt='cryptoAppImageOriginal' className=' w-[150rem] h-[auto] object-contain ' />
                      <h1 className=' pt-10 font-bold text-3xl '>App Crypto Wallet</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
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
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalAppGestao(true)}
          >
            <div className=' border-4 mx-5 mb-10  hover:scale-110 cursor-pointer '>
              <Image src={AppGestaoImage} alt='AppGestaoImage' className=' object-contain w-[500px] h-[350px] bg-[#fafafa]	' />
            </div>
          </button>
          {showModalAppGestao ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalAppGestao(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={AppGestaoImage} alt='AppGestaoImage' className=' w-[150rem] h-[auto] object-contain ' />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
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
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalOdontoCare(true)}
          >
            <div className=' border-4 mx-5 mb-10  hover:scale-110 cursor-pointer '>
              <Image src={OdontoCareImage} alt='OdontoCareImage' className=' object-contain w-[500px] h-[350px] bg-[#eef2f5]	' />
            </div>
          </button>
          {showModalOdontoCare ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalOdontoCare(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={OdontoCareImage} alt='OdontoCareImage' className=' w-[150rem] h-[auto] object-contain ' />
                      <h1 className=' pt-10 font-bold text-3xl '>Sistema OdontoCare System</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
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
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalArtworkFigures(true)}
          >
            <div className=' border-4 mx-5 mb-10  hover:scale-110 cursor-pointer '>
              <Image src={ArtworkFiguresImage} alt='ArtworkFiguresImage' className=' object-cover w-[500px] h-[350px]	' />
            </div>
          </button>
          {showModalArtworkFigures ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalArtworkFigures(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={ArtworkFiguresImageOriginal} alt='ArtworkFiguresImageOriginal' className=' w-[150rem] h-[auto] object-cover ' />
                      <h1 className=' pt-10 font-bold text-3xl '>Loja Virtual Artwork Figures</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
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
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalEcommerceVega(true)}
          >
            <div className=' border-4 mx-5 mb-10  hover:scale-110 cursor-pointer '>
              <Image src={EcommerceVegaImage} alt='EcommerceVegaImage' className=' object-fill w-[500px] h-[350px]	' />
            </div>
          </button>
          {showModalEcommerceVega ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalEcommerceVega(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={EcommerceVegaImageOriginal} alt='EcommerceVegaImageOriginal' className=' w-[150rem] h-[auto] object-cover ' />
                      <h1 className=' pt-10 font-bold text-3xl '>Loja Virtual Vega</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
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
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalMultiInvest(true)}
          >
            <div className=' border-4 mx-5 mb-10  hover:scale-110 cursor-pointer '>
              <Image src={MultinvestImage} alt='MultinvestImage' className=' object-fill w-[500px] h-[350px]	' />
            </div>
          </button>
          {showModalMultiInvest ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalMultiInvest(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={MultinvestImage} alt='MultinvestImage' className=' w-[150rem] h-[auto] object-cover ' />
                      <h1 className=' pt-10 font-bold text-3xl '>Site MultiInvest</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
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
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalDalaCoin(true)}
          >
            <div className=' border-4 mx-5 mb-10  hover:scale-110 cursor-pointer '>
              <Image src={lpDalacoinImage} alt='lpDalacoinImage' className=' object-fill w-[500px] h-[350px]	' />
            </div>
          </button>
          {showModalDalaCoin ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalDalaCoin(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={lpDalacoinImage} alt='lpDalacoinImage' className=' w-[150rem] h-[auto] object-cover ' />
                      <h1 className=' pt-10 font-bold text-3xl '>Site DalaCoin</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
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
            className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalLogistica(true)}
          >
            <div className=' border-4 mx-5 mb-10  hover:scale-110 cursor-pointer '>
              <Image src={logisticaImage} alt='logisticaImage' className=' object-fill w-[500px] h-[350px]	' />
            </div>
          </button>
          {showModalLogistica ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalLogistica(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto w-[auto] ">
                      <Image src={logisticaImageOriginal} alt='logisticaImageOriginal' className=' w-[150rem] h-[auto] object-cover pt-[143rem] ' />
                      <h1 className=' pt-10 font-bold text-3xl '>Site Cargo Logística</h1>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
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