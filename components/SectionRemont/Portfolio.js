

const Portfolio = () => {
	return (
		<section className='flex sd:min-h-[50vh] xz:min-h-[80vh] relative'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						порфолио
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 xz:pb-16 sd:pb-0 xz:mt-16 sd:mt-0'>
				<h5 className='font-bold text-4xl sd:pl-10 xz:pl-3'>
					Наши работы
				</h5>

				<div className='mt-6 sd:static xz:absolute left-0'>
					<div className="carousel carousel-center p-4  bg-primary">
						<div className="carousel-item relative">
							<img src="/images/remont/portfolio/1.avif"
								alt="Ремонт квартиры"
								className="w-[600px] mx-5 cursor-pointer"
							/>
							<p className='absolute bottom-0 left-8 text-white text-xl'>
								Passive House
							</p>
						</div>
						<div className="carousel-item relative">
							<img src="/images/remont/portfolio/2.avif"
								alt="Ремонт квартиры"
								className="w-[600px] mx-5 cursor-pointer"
							/>
							<p className='absolute bottom-0 left-8 text-white text-xl'>
								Верона
							</p>
						</div>
						<div className="carousel-item relative">
							<img src="/images/remont/portfolio/3.avif"
								alt="Ремонт квартиры"
								className="w-[600px] mx-5 cursor-pointer"
							/>
							<p className='absolute bottom-0 left-8 text-white text-xl'>
								Gourami
							</p>
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Portfolio