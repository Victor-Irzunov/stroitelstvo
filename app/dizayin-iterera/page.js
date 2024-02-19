import DesignCommerce from "@/components/SectionDizayin/DesignCommerce";
import DesignFlat from "@/components/SectionDizayin/DesignFlat";
import DesignHouses from "@/components/SectionDizayin/DesignHouses";
import DesignRoom from "@/components/SectionDizayin/DesignRoom";
import StagesDesign from "@/components/SectionDizayin/StagesDesign";
import { BtnComp } from "@/components/btn/BtnComp";
import Social from "@/components/social/Social"
import Image from "next/image"


export const metadata = {
	title: 'Студия дизайна интерьера в Минске',
	description: 'Разработка дизайна интерьеров. Услуги дизайн бюро интерьеров. Заказать онлайн индивидуальный 3D дизайн интерьера в дизайн-агенстве с комплектацией и ремонтом под ключ ⚡️ Договор + Гарантия + Качество ☎️ Звоните!',
	alternates: {
		canonical: ''
	}
};

const page = () => {


	return (
		<main className="">
			<section className='flex bg-cover min-h-screen' style={{ backgroundImage: 'url("/images/dizayin/fon.avif")' }}>
				<div className='sd:w-[248px] xz:w-14 border-r min-h-screen relative'>
					<Social />

					<div className='w-8 h-8 bg-primary absolute sd:top-20 xz:top-14 right-0' />
				</div>
				<div className='pt-40 sd:pl-5 xz:pl-3'>
					<h1 className='sd:text-7xl xz:text-4xl text-white font-bold'>
						Дизайн-проект <span className="sd:text-6xl xz:text-3xl block">
							интерьеров
						</span>
					</h1>
					{/* 
					<button className="btn btn-primary sd:w-72 xz:w-64 sd:btn-lg xz:btn-md shadow-2xl rounded-none mt-16 uppercase">
						Напишите нам
					</button> */}
					<BtnComp title='Напишите нам' />

				</div>
			</section>

			<section className='flex relative'>
				<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2' />

				<div className=''>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
						<div className='sd:absolute xz:static top-20 left-0'>
							<Image src='/images/dizayin/1.avif' alt='Квартиры' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h2 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Студия дизайна интерьеров
								</h2>
								<p className='sd:text-lg xz:text-base'>
									Компания logo разрабатывает, проектирует, визуализирует и 3D-моделирует дизайны интерьеров. Мы работаем с любыми помещениями: домами, квартирами, студиями, офисами, ресторанами и другой жилой и коммерческой недвижимостью.

									Для нас не существует понятия "это невозможно". Мы с радостью возьмемся за перепланировку помещений, разработаем уникальный дизайн-проект с учетом всех ваших пожеланий. Заказав дизайн-проект у нас, вам больше не придется страдать из-за недостатка розеток, неправильной установки дверей или ошибок электриков.

									Мы воплотим в жизнь самые смелые идеи и креативные дизайнерские решения.
								</p>
								{/* <button className="btn btn-primary sd:w-72 xz:w-64 btn-lg shadow-2xl rounded-none mt-16 uppercase">
									Заказать проект
								</button> */}
								<BtnComp title='Заказать проект' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='flex mt-8'>
				<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2' />
				<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
					<h3 className='font-bold text-4xl'>
						Дизайн интерьера — виды
					</h3>
					<p className='mt-6 text-lg'>
						Мы проектируем дизайн интерьеров для квартир, частных домов, коттеджей, таунхаусов и разнообразной коммерческой недвижимости.
					</p>
				</div>
			</section>
			<DesignHouses />
			<DesignFlat />
			<DesignCommerce />
			<DesignRoom />
			<StagesDesign />


			<section className='flex relative sd:mt-10 xz:mt-0'>
				<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
					<div className='relative'>
						<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
							Гарантия
						</div>
					</div>
				</div>

				<div className='sd:mt-32 xz:mt-0 pb-32'>
					<div className='flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
						<div className='sd:absolute xz:static left-0'>
							<Image src='/images/dizayin/1.webp' alt='Гарантия' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h6 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Мы гарантируем качество
								</h6>
								<p className='sd:text-lg xz:text-base'>
									Мы очень дотошны к деталям и ответственны за конечный результат. Закажите дизайн-проект у logo и станьте обладателем дома своей мечты.
								</p>
								{/* <button className="btn btn-primary sd:w-72 xz:w-64 btn-lg shadow-2xl rounded-none mt-16 uppercase">
									Получить предложение
								</button> */}
								<BtnComp title='Получить предложение' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default page