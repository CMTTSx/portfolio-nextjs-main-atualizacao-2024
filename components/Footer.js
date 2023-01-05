import React from 'react';

import Image from 'next/image';

import btcIcon from '../public/img/btcIcon.png'

export default function Footer() {
  return (
    <div className=' bg-footer mt-10 ' >
      <h3 className=' text-center text-white font-[bold] ' > © CSM SOLUÇÕES TECNOLÓGICAS E DESENVOLVIMENTO. Todos Direitos Reservados. {new Date().getFullYear()}. </h3>
      <h5 className=' text-white text-center ' >Aceito Pagamento em:</h5>
      <div className=' flex justify-center mt-[-10px] ' >
        <Image src={btcIcon} alt="btcIconPayment" width={'200em'} height={'100em'} />
      </div>
    </div>
  );
}