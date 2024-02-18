import Image from "next/image"


const Projects = () => {
	return (
		<section className='flex'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='text-gray-600 before-text2 text-right uppercase sd:block xz:hidden'>
						проекты
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-10 sd:pl-10 xz:pl-0'>
				<h4 className='font-bold text-4xl sd:pl-0 xz:pl-2'>
					Наши проекты
				</h4>

				<div className='mt-14 grid grid-cols-1 sd:grid-cols-2 gap-4'>
					<div className="relative">
						<Image src='/images/projects/1.webp' alt='Наш проект' width={720} height={405} />
					</div>
					<div className="p-7">
						<p className='font-semibold text-2xl'>
							Строим обьекты любой сложности
						</p>
						<div className='flex justify-around items-center mt-6'>
							<Image src='/images/svg/house1.svg' alt='Строим обьекты любой сложности' width={100} height={100} />
							<Image src='/images/svg/house2.svg' alt='Строим обьекты любой сложности' width={120} height={120} />
							<Image src='/images/svg/house3.svg' alt='Строим обьекты любой сложности' width={100} height={100} />
						</div>
					</div>
					<div className="relative">
						<div className='absolute top-0 left-0 bg-black/50 backdrop-blur-md w-1/3 h-12 flex justify-center items-center'>
							<p className='text-white text-xl font-semibold'>
								Таунхаус
							</p>
						</div>
						<Image src='/images/projects/2.webp' alt='Наш проект' width={720} height={405} />
					</div>
					<div className="relative">
						<div className='absolute top-0 left-0 bg-black/50 backdrop-blur-md w-1/3 h-12 flex justify-center items-center'>
							<p className='text-white text-xl font-semibold'>
								Куб
							</p>
						</div>
						<Image src='/images/projects/3.webp' alt='Наш проект' width={720} height={405} />
					</div>
					<div className="relative">
						<div className='absolute top-0 left-0 bg-black/50 backdrop-blur-md w-1/3 h-12 flex justify-center items-center'>
							<p className='text-white text-xl font-semibold'>
								Riviera Villas
							</p>
						</div>
						<Image src='/images/projects/4.webp' alt='Наш проект' width={720} height={405} />
					</div>
					<div className="relative">
						<div className='absolute top-0 left-0 bg-black/50 backdrop-blur-md w-1/3 h-12 flex justify-center items-center'>
							<p className='text-white text-xl font-semibold'>
								Passive House
							</p>
						</div>
						<Image src='/images/projects/5.webp' alt='Наш проект' width={720} height={405} />
					</div>
				</div>

			</div>
		</section>
	)
}

export default Projects