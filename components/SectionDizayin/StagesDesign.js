const data = [
	{
		step: '01',
		title: 'Консультация',
		description: 'Определяем ваши потребности, составляем ТЗ.'
	},
	{
		step: '02',
		title: 'Обмер',
		description: 'Инженеры отправляются на объект и делают замеры. Затем мы сможем составить приблизительную смету для выполнения работ.'
	},
	{
		step: '03',
		title: 'Разработка решения',
		description: 'Придумываем перепланировку, расставляем столы, стулья и кровати, проектируем общий дизайн интерьера в 3D. Обычно мы предлагаем несколько вариантов, а вы выбираете, что подходит именно вам.'
	},
	{
		step: '04',
		title: 'Контроль',
		description: 'Если вы планирует делать ремонт с нами, мы привлечем свою бригаду для воплощения проекта дизайна в жизнь. Это позволит нам контролировать все этапы работ, исключив возможные ошибки рабочих.'
	}
];

const StagesDesign = () => {
	return (
		<section className='flex'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						Этапы
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
				<h5 className='font-bold text-4xl'>
					Этапы сотрудничества
				</h5>

				<div className='mt-6'>
					<p className='sd:text-lg xz:text-base font-semibold'>
						Наша студия дизайна интерьера работает в несколько этапов:
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
											<p className='mt-3'>
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

export default StagesDesign