import Link from 'next/link';
import Image from 'next/image';
import WahtsappImg from '../../Images/Logo/logo-whatsapp.svg';
import Button from '../Button/Button';

export default function Navbar() {
  return (
    <section className="w-auto p-4 items-center flex justify-between bg-[#D9D9D9]">
      <h1 className='font-bold text-orange-950'> Bumbon Yu Djum </h1>
      <div className='flex items-center'>
        <Link className='pr-4 font-bold text-orange-950' href="/">
          Beranda
        </Link>
        <Button>
          <div className='flex'>
            <Image className='pl-2' alt='Whatsap' src={WahtsappImg} />
            <span className='pl-2 font-bold text-orange-950'>Pesan Sekarang!</span>
          </div>
        </Button>
      </div>
    </section>
  );
}