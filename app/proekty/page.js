import Image from "next/image"



export const metadata = {
	title: 'Проекты ремонта домов и квартир под ключ в Минске и области',
	description: 'Посмотрите наши проекты по ремонту домов и квартир под ключ в Минске и области. Мы предлагаем широкий спектр услуг и индивидуальный подход к каждому клиенту.',
	alternates: {
		 canonical: ''
	}
};


const page = () => {
	return (
		<section className='min-h-screen pt-32 pb-28'>
			<h1 className='text-5xl font-bold xz:px-5 sd:px-72'>
				Проекты
			</h1>
			<div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
				<div className='group'>
					<div className='relative'>
						<Image src='/images/projectsPage/1.avif' alt='Проект 1' width={1920} height={1080} className='object-cover' />
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
						<div className='absolute bottom-2 left-3'>
							<h2 className='text-white text-2xl font-semibold'>
								Резиденция Лесники
							</h2>
						</div>
					</div>
				</div>
				<div className='group'>
					<div className='relative'>
						<Image src='/images/projectsPage/2.avif' alt='Проект 2' width={1920} height={1080} className='object-cover' />
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
						<div className='absolute bottom-2 left-3'>
							<h2 className='text-white text-2xl font-semibold'>
								Министерский
							</h2>
						</div>
					</div>
				</div>
				<div className='group'>
					<div className='relative'>
						<Image src='/images/projectsPage/3.avif' alt='Проект 3' width={1920} height={1080} className='object-cover' />
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
						<div className='absolute bottom-2 left-3'>
							<h2 className='text-white text-2xl font-semibold'>
								Таунхаус
							</h2>
						</div>
					</div>
				</div>
				<div className='group'>
					<div className='relative'>
						<Image src='/images/projectsPage/4.avif' alt='Проект 4' width={1920} height={1080} className='object-cover' />
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
						<div className='absolute bottom-2 left-3'>
							<h2 className='text-white text-2xl font-semibold'>
								Дуплекс
							</h2>
						</div>
					</div>
				</div>
				<div className='group'>
					<div className='relative'>
						<Image src='/images/projectsPage/5.avif' alt='Проект 5' width={1920} height={1080} className='object-cover' />
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
						<div className='absolute bottom-2 left-3'>
							<h2 className='text-white text-2xl font-semibold'>
								Pilot's family home
							</h2>
						</div>
					</div>
				</div>
				<div className='group'>
					<div className='relative'>
						<Image src='/images/projectsPage/6.avif' alt='Проект 6' width={1920} height={1080} className='object-cover' />
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
						<div className='absolute bottom-2 left-3'>
							<h2 className='text-white text-2xl font-semibold'>
								Куб
							</h2>
						</div>
					</div>
				</div>
				<div className='group'>
					<div className='relative'>
						<Image src='/images/projectsPage/7.avif' alt='Проект 7' width={1920} height={1080} className='object-cover' />
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
						<div className='absolute bottom-2 left-3'>
							<h2 className='text-white text-2xl font-semibold'>
								Riviera villas
							</h2>
						</div>
					</div>
				</div>
				<div className='group'>
					<div className='relative'>
						<Image src='/images/projectsPage/8.avif' alt='Проект 8' width={1920} height={1080} className='object-cover' />
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
						<div className='absolute bottom-2 left-3'>
							<h2 className='text-white text-2xl font-semibold'>
								Graal shale
							</h2>
						</div>
					</div>
				</div>
				<div className='group'>
					<div className='relative'>
						<Image src='/images/projectsPage/9.avif' alt='Проект 9' width={1920} height={1080} className='object-cover' />
						<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
						<div className='absolute bottom-2 left-3'>
							<h2 className='text-white text-2xl font-semibold'>
								Ктм
							</h2>
						</div>
					</div>
				</div>
			</div>


		</section>
	)
}

export default page