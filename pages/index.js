import React from 'react';
import Head from 'next/head';
import Home from './Home';

export default function Pages() {
 return (
   <div>
    <Head>
        <title>Calil Sousa Mattos | Programador Web e Mobile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio, Calil Sousa Mattos, Programador, Lojas Virtuais, Aplicativos, Sistemas, MongoDB, ExpressJS, ReactJS, NodeJS, Javascript, JS" />
      </Head>
    <Home />
   </div>
 );
}