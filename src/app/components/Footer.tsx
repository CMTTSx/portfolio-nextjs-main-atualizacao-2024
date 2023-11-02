import React from 'react';

import Image from 'next/image';

import btcIcon from 'public/images/btcIcon.png'

export default function Footer() {
  return (
    <div className=' bg-footer mt-10 ' >
      <h3 className=' text-center text-white font-[bold] pt-5 ' > © CSM SOLUÇÕES TECNOLÓGICAS E DESENVOLVIMENTO. Todos Direitos Reservados. {new Date().getFullYear()}. </h3>
      <h5 className=' text-white text-center mt-4  ' >Aceito Pagamento em:</h5>
      <div className=' flex justify-center  mt-[-1rem] ' >
        <Image src={btcIcon} alt="btcIconPayment" width={200} />
      </div>
    </div>
  );
}