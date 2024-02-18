const data = [
	{
		step: '01',
		title: 'Земля',
		description: 'Определяемся с территорией и примерным размером постройки.'
	},
	{
		step: '02',
		title: 'Получение разрешения',
		description: 'Разрешение позволяет нам работать законно.'
	},
	{
		step: '03',
		title: 'Геология',
		description: 'Изучаем свойства почвы, чтобы исключить непредвиденные обстоятельства'
	},
	{
		step: '04',
		title: 'Геодезия',
		description: 'Создаем план местности с указанием наклонов почвы, ям и возвышенностей'
	},
	{
		step: '05',
		title: 'Проектирование',
		description: 'Создаем проект дома и утверждаем смету. На этом этапе вы узнаете предварительную стоимость квадратного метра'
	},
	{
		step: '06',
		title: 'Дизайн-проект',
		description: 'Создаем визуализацию будущей архитектуры здания.'
	},
	{
		step: '07',
		title: 'Фундамент',
		description: 'Возведем основу для вашего будущего жилья.'
	},
	{
		step: '08',
		title: 'Стены',
		description: 'Построим их из выбранного материала.'
	},
	{
		step: '09',
		title: 'Инженерия',
		description: 'Проводятся инженерные коммуникации.'
	},
	{
		step: '10',
		title: 'Окна, двери',
		description: 'Осуществляется остекление и установка дверей.'
	},
	{
		step: '11',
		title: 'Крыша',
		description: 'На этом строительство самого дома завершается.'
	},
	{
		step: '12',
		title: 'Фасад',
		description: 'Финальные отделочные работы внешнего облика дома.'
	},
	{
		step: '13',
		title: 'Ремонт под ключ',
		description: 'Разработка 3D дизайн-проекта с ремотном под ключ.'
	},
];

const Stroitelstvo = () => {
	return (
		<section className='flex'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						строительство
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
				<h5 className='font-bold text-4xl'>
					Строительство дома поэтапно
				</h5>

				<div className='mt-6'>
					<p className='sd:text-lg xz:text-base font-semibold'>
						Какие этапы сопровождают нас при строительстве дома? Разбираемся:
					</p>

					<div className='mt-7'>
						<div className='flex flex-wrap'>
							{data.map((step, index) => (
								<div key={index} className='w-full sd:w-1/2 mb-6'>
									<div className='flex'>
										<p className='text-primary sd:text-8xl xz:text-6xl font-bold mr-2'>
											{step.step}
										</p>
										<div className=''>
											<h6 className='font-bold text-2xl'>
												{step.title}
											</h6>
											<p className='font-semibold mt-3'>
												{step.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Stroitelstvo