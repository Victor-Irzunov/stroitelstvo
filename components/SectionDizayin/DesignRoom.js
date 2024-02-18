import Image from "next/image"

const DesignRoom = () => {
	return (
		<section className='flex relative'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						Комнаты
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
				<h4 className='font-bold text-4xl'>
					Дизайн комнат
				</h4>

				<p className='mt-5'>
					Студия дизайна интерьеров logo уделяет особое внимание каждой комнате:
				</p>

				<div className=''>

					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
						<div className='sd:absolute xz:static  left-0'>
							<Image src='/images/dizayin/room/1.avif' alt='Ванная' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Ванная
								</h4>
								<p className='sd:text-lg xz:text-base'>
									Ванная комната прежде всего должна быьть практичной. В зависимости от площади, дизайнер может "играться" разными вариантами размещения сантехники. Возможен стандартный вариант: ванная, раковина, туалет. Но также ваместо ванной можно разместить душевую кабину и оснастить помещение биде, стиральной машинкой, сушкой. Сегодня в тренде использовать встраиваемые в стену смесители, а раковины размещать прямо в столешницах. Немало внимания уделяется освещению, которое может не только визуально увеличить пространство, но и существенно добавить уюта.
								</p>
							</div>
						</div>
					</div>


					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
						<div className='sd:absolute xz:static  left-0'>
							<Image src='/images/dizayin/room/2.avif' alt='Кухня' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Кухня
								</h4>
								<p className='sd:text-lg xz:text-base'>
									Кухне уделяется очень много внимания, поскольку она должна быть не только стильной и вписываться в общий интерьер всего дома, но и быть функциональной. Очень часто владельцы квартир жалуются, сколько бы шкафов на кухне разместили - все равно вся утварь или не помещается, или место для нее очень быстро заканчивается. Наша задача - максимально использовать площадь под нужную мебель, предусмотреть места для встроенной бытовой техники, правильно развести электрику и одновременно с этим постараться обеспечить достаточно свободного пространства. На кухне принято проводить немало времени: готовка, регулярные приемы пищи, семейные ужины. Во время ремонта здесь лучше избегать ненужных ошибок.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
						<div className='sd:absolute xz:static  left-0'>
							<Image src='/images/dizayin/room/3.avif' alt='Спальня' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Спальня
								</h4>
								<p className='sd:text-lg xz:text-base'>
									Спальня - это место, где хочется уединиться после сложных рабочих будней, просто поваляться с книгой или посмотреть ТВ. Здесь важно разработать правильную планировку, чтобы кровать максимально комфортно разместилась по отншению к окнам, и подобрать такие цвета, которые помогут стать спальне комфортной и уютной. Обычно принято избегать слишком ярких оттенков, отдавая предпочтение спокойным пастельным тонам.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
						<div className='sd:absolute xz:static left-0'>
							<Image src='/images/dizayin/room/4.avif' alt='Гостиная' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Гостиная
								</h4>
								<p className='sd:text-lg xz:text-base'>
									Гостиная - это визитка дома. В этом помещении принято отдыхать, проводить время с семьей, принимать гостей, а если гостиная объеденена с кухней - то и кушать. У мнгих есть опасения, из-за того, что в гостиной проводишь больше всего времени, выбранный дизайн интерьера может быстро наскучить, поэтому тут важно правильно расставить акценты и разработать такой дизайн, который будет актуален много-много лет.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
						<div className='sd:absolute xz:static  left-0'>
							<Image src='/images/dizayin/room/5.avif' alt='Детская' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Детская
								</h4>
								<p className='sd:text-lg xz:text-base'>
									Детская так или иначе будет выбиваться из общего стиля квартиры или дома, потому что нередко сами дети хотят яркие элементы или выполнение своей спальни в стиле любимых сюжетов из мультфильмов или книг. Здесь также важно обустроить правильное зонирование, чтобы функциональное наполнение спальни соответствовало всем нуждам ребенка: это и спальное место, и рабочее, и игровое пространство.
								</p>
							</div>
						</div>
					</div>

					<div className='flex justify-center mt-5'>
						<button className="btn btn-primary sd:w-96 xz:w-64 btn-lg shadow-2xl rounded-none mt-0 uppercase">
							Заказать проект
						</button>
					</div>

				</div>

			</div>
		</section>
	)
}

export default DesignRoom