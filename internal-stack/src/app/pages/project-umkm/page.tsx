import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../../Components/Navbar/Navbar'
import umkm from '../../../../public/umkm.png'
import Footer from '../../../Components/UmkmFragments/Footer/footer'

export default function Page() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      {/* <figure className='max-w-full container flex items-center justify-center'>
        <Image
          src={umkm}
          alt="banner-umkm"
          className='h-auto'
        />
      </figure> */}
      <div className='bg-red-900 bg-cover bg-no-repeat
      mix-blend-normal' style={{
        backgroundImage: `url(/umkm.png)`,
        width: "100vw",
        height: "70vh"
      }} />
      <div>
        <Footer />
      </div>
    </section>
  )
}