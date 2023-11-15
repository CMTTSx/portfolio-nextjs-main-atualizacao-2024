import React from 'react';

import Image from 'next/image';

import btcIcon from 'public/images/btcIcon.png'

export default function Footer() {
  return (
    <div className=' bg-footer mt-10 overflow-x-hidden ' >
      <h3 className=' sm:ml-[4rem] sm3:mr-[0.2rem] md:ml-[5rem] md:mr-[1rem] sm:text-center lg:ml-13 lg:text-center text-white font-[bold] pt-5 ' > © CSM SOLUÇÕES TECNOLÓGICAS E DESENVOLVIMENTO. Todos Direitos Reservados. {new Date().getFullYear()}. </h3>
      <h5 className=' text-white sm:ml-[4rem] sm2:ml-[4em] sm3:ml-[4rem] lg:ml-[4rem] text-center mt-4  ' >Aceito Pagamento em:</h5>
      <div className=' flex justify-center mt-[-1rem] ' >
        <Image src={btcIcon} alt="btcIconPayment" width={200} className=' sm:ml-[4rem] lg:ml-[3.5rem] ' />
      </div>
    </div>
  );
}