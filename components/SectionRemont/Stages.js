const data = [
	{
		step: '01',
		title: 'Первичная консультация',
		description: ''
	},
	{
		step: '02',
		title: 'Выезд прораба на обьект',
		description: ''
	},
	{
		step: '03',
		title: 'Составление сметы',
		description: ''
	},
	{
		step: '04',
		title: 'Создание дизайн-проекта',
		description: ''
	},
	{
		step: '05',
		title: 'Демонтаж и вынос строительного мусора',
		description: ''
	},
	{
		step: '06',
		title: 'Установка коммуникации',
		description: ''
	},
	{
		step: '07',
		title: 'Поставка стройматериалов',
		description: ''
	},
	{
		step: '08',
		title: 'Черновые работы',
		description: ''
	},
	{
		step: '09',
		title: 'Монтажные работы',
		description: ''
	},
	{
		step: '10',
		title: 'Чистовая отделка',
		description: ''
	},
	{
		step: '11',
		title: 'Установка техники и мебели',
		description: ''
	}
];

const Stages = () => {
	return (
		<section className='flex'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						этапы
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
				<h5 className='font-bold text-4xl'>
					Этапы  ремонта под ключ:
				</h5>

				<div className='mt-6'>
					<p className='sd:text-lg xz:text-base font-semibold'>
						Какие этапы сопровождают нас при строительстве дома? Разбираемся:
					</p>

					<div className='mt-7'>
						<div className='flex flex-wrap'>
							{data.map((step, index) => (
								<div key={index} className='w-full sd:w-1/2 mb-6'>
									<div className='flex items-center'>
										<p className='text-primary sd:text-8xl xz:text-6xl font-bold mr-2'>
											{step.step}
										</p>
										<div className=''>
											<h6 className='font-bold text-2xl'>
												{step.title}
											</h6>

										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<p className='bg-primary px-1 inline-block text-xl font-semibold mb-3'>
						Часто задаваемы вопросы
					</p>
					<br />
					<p className='bg-primary px-1 inline-block  mb-2'>
						Как рассчитывается цена за ремонт под ключ?
					</p>
					<p className='mt-2'>
						Назвать точную сумму стоимости работы на ремонт под ключ с материалами на стадии первичной консультации практически невозможно. Только после осмотра помещения и составления предварительной сметы можно назвать ориентировочную стоимость.
					</p>

					<p className='bg-primary px-1 inline-block  mb-2 mt-2'>
						С чего начинать ремонт в квартире?
					</p>
					<p className='mt-2'>
						Начать ремонт нужно с первичного осмотра помещения профильным специалистом. Он сможет дать консультацию и оценить сложность ремонта. Заказать ремонт под ключ можно позвонив нам по номеру 097-359-11-11 или оставив заявку прямо на сайте и мы с вами свяжемся.
					</p>


					<p className='bg-primary px-1 inline-block  mb-2 mt-2'>
						Какие ремонты под ключ вы делаете?
					</p>
					<p className='mt-2'>
						logo специализируется на профессиональном ремонте помещений c мебелью под ключ. Мы можем провести капитальный, косметический или элитный ремонт.
					</p>

					<p className='bg-primary px-1 inline-block  mb-2 mt-2'>
						Почему ремонт лучше осуществлять с logo?
					</p>
					<p className='mt-2'>
						У нас большой опыт работы, собственная бригада, высокий уровень компетентности. Мы берем на себя ответственность за качество и надежность проводимых работ.
					</p>

				</div>
			</div>
		</section>
	)
}

export default Stages