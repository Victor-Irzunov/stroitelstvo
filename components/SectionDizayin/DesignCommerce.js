import Image from "next/image"

const DesignCommerce = () => {
	return (
		<section className='flex relative'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						Коммерция
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
				<h4 className='font-bold text-4xl'>
					Дизайн для коммерческой недвижимости
				</h4>

				<p className='mt-5'>
					Мы с радостью поможем владельцам коммерческой недвижимости разработать дизайн интереьера своего помещенния вне зависимости ресторан это, офис, магазин или салон красоты. Интерьер - это лицо вашего бренда. Мы разработаем уникальную концепцию дизайна, которая будет соответствовать духу и принципам вашего бренда и выделять вас среди конкурентов.
				</p>

				<div className=''>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
						<div className='sd:absolute xz:static top-60 left-0'>
							<Image src='/images/dizayin/commerce/1.webp' alt='Квартиры' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Офис
								</h4>
								<p className='sd:text-lg xz:text-base'>
									Предлагаем современный дизайн офиса, который сочетает в себе функциональность, комфорт и стиль. Мы уделяем особое внимание каждой детали, чтобы создать пространство, в котором сотрудники будут вдохновляться и проявлять свой потенциал. Наш подход направлен на создание эргономичных рабочих мест, использование инновационных технологий и учет индивидуальных потребностей вашего бизнеса
								</p>
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>
	)
}

export default DesignCommerce