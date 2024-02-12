import Link from "next/link"


const UslugiСonstruction = () => {
	return (

		<section className='flex'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						услуги
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-10 sd:pl-10 xz:pl-3'>
				<h3 className='font-bold text-4xl'>
					Строительные услуги
				</h3>

				<div className='sd:mt-14 xz:mt-5'>
					<div className='flex flex-wrap sd:flex-row xz:flex-col'>
						<Link href='' className="px-2 py-4">
							<p className='text-2xl hover:bg-primary px-2 hover:after:content-["_↗"]'>
								<span className="text-primary font-bold">
									01/
								</span>{' '}
								Архитектурное проектирование
							</p>
						</Link>
						<Link href='' className="px-2 py-4">
							<p className='text-2xl hover:bg-primary px-2 hover:after:content-["_↗"]'>
								<span className="text-primary font-bold">
									02/
								</span>{' '}
								Строительство
							</p>
						</Link>

						<Link href='' className="px-2 py-4">
							<p className='text-2xl hover:bg-primary px-2 hover:after:content-["_↗"]'>
								<span className="text-primary font-bold">
									03/
								</span>{' '}
								Капитальный ремонт
							</p>
						</Link>
						<Link href='' className="px-2 py-4">
							<p className='text-2xl hover:bg-primary px-2 hover:after:content-["_↗"]'>
								<span className="text-primary font-bold">
									04/
								</span>{' '}
								Подключение коммуникаций
							</p>
						</Link>
					</div>

				</div>
			</div>
		</section>
	)
}

export default UslugiСonstruction