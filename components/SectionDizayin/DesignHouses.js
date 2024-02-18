import Image from "next/image"

const DesignHouses = () => {
	return (
		<section className='flex relative'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						Дом
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
				<h4 className='font-bold text-4xl'>
					Дизайн интерьера дома
				</h4>

				<p className='mt-5'>
					logo может спроектировать дизайн интерьера частного дома и реализовать его ремонт под ключ.
				</p>

				<div className=''>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
						<div className='sd:absolute xz:static top-60 left-0'>
							<Image src='/images/dizayin/house/1.avif' alt='Коттедж' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Коттедж
								</h4>
								<p className='sd:text-lg xz:text-base'>
									logo разрабатывает индивидуальные дизайны интерьеров в соответствии с пожеланиями. Кому-то нравится сдержанная классика, кто-то любит уютный деревенский стиль, другие отдают предпочтение минималистическому скандинавскому интерьеру. Мы разработаем проект в любом из выбранных вами стилей. Вас ждет современный, стильный, функциональный дизайн.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[40vh] xz:min-h-max'>
						<div className='sd:absolute xz:static left-0'>
							<Image src='/images/dizayin/house/2.avif' alt='Таунхаус' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Таунхаус
								</h4>
								<p className='sd:text-lg xz:text-base'>
									Особенность таунхаусов - свободная планировка и возможность переноса даже коммуникаций. Часто такие дома остаются без внутренней отделки, перегородок, лестницы. Это дает полную свободу действий дизайнеру для творчества и креативных идей. Нередко первый этаж имеет панорманое остекление, хорошее освещение помещений первого уровня добавит дому уюта. Разработать дизайн таунхауса можно в любом стиле - минималистичном, викторианском, скандинавском, лофт - главное разработать концепцию и учесть все инженерные нюансы.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[40vh] xz:min-h-max'>
						<div className='sd:absolute xz:static  left-0'>
							<Image src='/images/dizayin/house/3.avif' alt='Дачный дом' width={570} height={208} />
						</div>
						<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
							<div className=''>
								<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
									Дачный дом
								</h4>
								<p className='sd:text-lg xz:text-base'>
									Поскольку дачный дом не предполагает постоянного проживания в нем, акценты в дизайне ставятся на функциональность и простор. Нередко в основу проекта ложится минималистичный стиль, с использованием деревянного декора и светлых оттенков для всего интерьера. На практике, действительно большинство заказчиков хотят светлые и просторные дачи. При ремонте дач мы выбираем качественные материалы. Это позволяет сохранятся комфортному микроклимату в помещениях и в жару, и в холод, и в непогоду.
								</p>
							</div>
						</div>
					</div>
					<div className='flex justify-center mt-7'>
						<button className="btn btn-primary sd:w-96 xz:w-64 btn-lg shadow-2xl rounded-none mt-0 uppercase">
							Получить консультацию
						</button>
					</div>
				</div>

			</div>
		</section>
	)
}

export default DesignHouses