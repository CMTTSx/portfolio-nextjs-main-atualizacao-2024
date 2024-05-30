import Image from 'next/image';

import btcIcon from 'public/images/btcIcon.png'

export default function Footer() {
  return (
      <footer className=' sm:ml-[4rem] 2xl:ml-[4rem] bg-footer mt-10 min-w-320 ' >
        <h3 className=' text-white text-center font-[bold] pt-5 ' > © CSM SOLUÇÕES TECNOLÓGICAS E DESENVOLVIMENTO. Todos Direitos Reservados. {new Date().getFullYear()}. </h3>
        <h5 className=' text-white text-center mt-4 mx-auto ' >Aceito Pagamento em:</h5>
        <div className=' flex justify-center mt-[-1rem] ' >
          <Image src={btcIcon} alt="btcIconPayment" width={200} className=' mx:auto ' />
        </div>
      </footer>
  );
}