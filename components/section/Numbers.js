
const Numbers = () => {
	return (
		<section className='flex pt-24'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						цифры
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3'>
				<h2 className='font-bold text-4xl'>
					Коротко о нас
				</h2>

				<div className='sd:mt-14 xz:mt-6 flex  sd:flex-row xz:flex-col'>
					<p className='sd:w-1/2 xz:w-full sd:text-lg xz:text-sm'>
						Основные принципы деятельности нашей строительной компании опираются на три фундаментальных принципа: энергоэффективность, экологическая безопасность и эстетика. Наша миссия - создание будущего. Применение уникальных технологий и разработка эксклюзивных дизайнерских концепций гарантируют, что ваш дом станет оазисом комфорта, тепла и уюта
					</p>

					<div className='flex sd:w-1/2 xz:w-full sd:flex-row xz:flex-col sd:mt-0 xz:mt-5'>
						<div className='flex items-center'>
							<div className='w-1 sd:h-full xz:h-20 bg-primary sd:ml-5 sd:mr-5 xz:-ml-3 xz:mr-2' />
							<div className='font-bold mt-4'>
								<p className='sd:text-8xl xz:text-5xl'>
									10
								</p>
								<p className='sd:text-base xz:text-xs'>
									Лет на рынке
								</p>
							</div>
						</div>


						<div className='flex items-center'>
							<div className='w-1 sd:h-full xz:h-20 bg-primary sd:ml-5 sd:mr-5 xz:-ml-3 xz:mr-2' />
							<div className='font-bold mt-4'>
								<p className='sd:text-8xl xz:text-5xl'>
									56
								</p>
								<p className='sd:text-base xz:text-xs'>
									Архетиктурных <br /> проектов
								</p>
							</div>
						</div>


						<div className='flex items-center'>
							<div className='w-1 sd:h-full xz:h-20 bg-primary sd:ml-5 sd:mr-5 xz:-ml-3 xz:mr-2' />
							<div className='font-bold mt-4'>
								<p className='sd:text-8xl xz:text-5xl'>
									28
								</p>
								<p className='sd:text-base xz:text-xs'>
									Построенных <br /> заданий
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Numbers