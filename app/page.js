"use client"
import Typed from 'typed.js';
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Social from '@/components/social/Social';
import Numbers from '@/components/SectionMain/Numbers';
import UslugiСonstruction from '@/components/SectionMain/UslugiСonstruction';
import UslugiRemont from '@/components/SectionMain/UslugiRemont';
import Projects from '@/components/SectionMain/Projects';
import Modal from '@/components/modal/Modal';
import { BtnComp } from '@/components/btn/BtnComp';



export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const el = useRef(null)
  const clipRef11 = useRef()
  const typed = useRef(null)


  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    // document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    // document.getElementById("my_modal_3").close();
    setSelectedProduct(null)
  };


  useEffect(() => {
    const options = {
      strings: [
        'Под ключ в минске'
      ],
      typeSpeed: 120, // Скорость печати
      startDelay: 500, // Задержка перед стартом анимации
      backSpeed: 50, // Скорость удаления
      loop: true
    }
    typed.current = new Typed(el.current, options)

    return () => typed.current.destroy()
  }, [])


  return (
    <main className="min-h-screen overflow-hidden">
      <section className='flex relative'>
        <div className='sd:w-[248px] xz:w-14 border-r min-h-screen relative'>
          <Social />
        </div>
        <div className='flex'>
          <div className='relative' ref={clipRef11}>
            <h1 className='sd:text-6xl xz:text-4xl font-semibold absolute top-40 sd:-left-14 xz:left-0 z-10'>
              <span className='block'>
                Строительство <br /> и ремонт{' '}
              </span>
              <span
                ref={el}
                className='sd:text-3xl xz:text-xl font-normal uppercase'
              />
            </h1>
            <span className='text-[500px] text-white demotext font-extrabold absolute -top-32 -left-40 -z-10'>
              С
            </span>
            <button
              className="btn btn-primary sd:w-72 xz:w-64 btn-md shadow-2xl rounded-none mt-8 absolute sd:top-96 xz:top-72 sd:-left-14 xz:left-0 uppercase"
              onClick={() => handleOrderClick('Получить консультацию')}
            >
              Получить консультацию
            </button>
          </div>

          <div className='sd:hidden xz:block mt-14 absolute -bottom-10'>
            <Image src='/images/fon/fon1.webp'
              alt='Фоновое изображение строительство дома'
              width={600} height={600}
              className='w-full' />
          </div>

          <div className='sd:block xz:hidden'>
            <div className='border-white border-8 left-[35%] absolute bottom-0 z-10'>
              <Image
                src='/images/fon/fon1.webp'
                alt='Фоновое изображение строительство дома'
                width={600} height={600}
                className='w-[300px]'
              />
            </div>
            <div className='border-white border-8 w-[470px] left-[52%] absolute bottom-10 z-10'>
              <Image
                src='/images/fon/fon2.webp'
                alt='Фоновое изображение строительство дома'
                width={800} height={800}
                className=''
              />
            </div>
            <div className='border-white border-8 left-[75%] absolute bottom-13 z-0'>
              <Image
                src='/images/fon/fon3.webp'
                alt='Фоновое изображение строительство дома'
                width={800} height={800}
                className='w-[350px]'
              />
            </div>
          </div>

        </div>
      </section>

      <Numbers />

      <UslugiСonstruction  />
      <UslugiRemont  />
      <Projects  />

      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </main>
  );
}
