import Image from "next/image"
import { BtnComp } from "../btn/BtnComp"

const DesignFlat = () => {
	return (
		<section className='flex relative'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						Квартира
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
				<h4 className='font-bold text-4xl'>
					Дизайн квартир
				</h4>

				<p className='mt-5'>
					Наша студия предлагает услуги по проектированию дизайна интерьеров квартир под ключ:
				</p>

				<div className=''>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
						<div className='sd:absolute xz:static top-60 left-0'>
							<Image src='/images/dizayin/flat/1.avif' alt='Квартиры' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Дизайн 1-комнатной квартиры
								</h4>
								<p className='sd:text-lg xz:text-base'>
									1-комнатные квартиры обладают небольшой площадью, поэтому при разработке дизайна необходимо определить правильное зонирование и максимально использовать имеющуюся площадь под первоочередные нужды. Наши дизайнеры смогут разработать такой проект, который позволит вместить всю нужную мебель, не "съедая" при этом лишнее пространство.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[40vh] xz:min-h-max'>
						<div className='sd:absolute xz:static left-0'>
							<Image src='/images/dizayin/flat/2.avif' alt='Дома' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Дизайн 2-комнатной квартиры
								</h4>
								<p className='sd:text-lg xz:text-base'>
									С 2-комнатными квартирами задача упрощается. Здесь можно играться с планировкой, например, объединив кухню с гостиной. А можно, наоборот, оставить раздельными все три помещения. Мы учтем любое пожелание заказчика в каждом конкретном случае.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[40vh] xz:min-h-max'>
						<div className='sd:absolute xz:static  left-0'>
							<Image src='/images/dizayin/flat/3.avif' alt='Дома' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Дизайн 3-комнатной квартиры
								</h4>
								<p className='sd:text-lg xz:text-base'>
									Мы можем спроектировать оригинальный дизайн для 3-комнатной квартиры. Существенное увеличение площади ставит перед серьезными вопросами: можно ли менять стили в разных комнатах? А если вся квартира приведена в единый стиль, как быть с детской? А как такую квартиру правильно зонировать? Мы не только с радостью ответим на все вопросы, но и разработаем несколько вариантов дизайн-проектов, чтобы вы смогли подобрать понравившийся конкретно под свои потребности.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[40vh] xz:min-h-max'>
						<div className='sd:absolute xz:static  left-0'>
							<Image src='/images/dizayin/flat/4.avif' alt='Дома' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Студия
								</h4>
								<p className='sd:text-lg xz:text-base'>
									Студия дизайна интерьера logo с радостью возьмется за дизайн квариры-студии. Наш опыт позволит грамотно обустроить такую квартиру и избежать распространенных ошибок, которые совершают при планировках пространств - перегруз мебелью, дефицит шкафов, лишние перегородки.
								</p>
							</div>
						</div>
					</div>
					<div className='flex justify-center mt-8'>
						{/* <button className="btn btn-primary sd:w-96 xz:w-64 btn-lg shadow-2xl rounded-none mt-0 uppercase">
							Рассчитать стоимость
						</button> */}

						<BtnComp title='Рассчитать стоимость' />
					</div>
				</div>

			</div>
		</section>
	)
}

export default DesignFlat