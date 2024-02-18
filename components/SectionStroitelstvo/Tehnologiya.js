import Image from "next/image"


const Tehnologiya = () => {
	return (
		<section className='flex'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						сырьё
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
				<h4 className='font-bold text-4xl mb-7'>
					Технология строительства
				</h4>

				<p className='sd:text-lg xz:text-base font-semibold'>
					С чего начинать строительство дома? Конечно с выбора материалов! Мы можем построить дом из любых выбранных вами мантериалов:
				</p>

				<div className='mt-10'>

					<div className='flex sd:flex-row xz:flex-col mb-6'>
						<Image
							src='/images/stroitelstvo-domov/type/1.avif'
							alt='Несъемная опалубка'
							width={100} height={100}
							className="p-1 sd:mr-5 xz:mr-3"
						/>
						<div className=''>
							<h5 className='font-bold mb-3 text-xl'>
								Несъемная опалубка
							</h5>
							<p className=''>
								Считается одним из лучших вариантов. В основе лежит арматурный железный каркас, который заливается бетоном. В конечном счете мы имеем монолитную несущую стену, мощное наружное утепление стен и готовую черновую штукатурку внутри здания.
							</p>
						</div>
					</div>
					<div className='flex sd:flex-row xz:flex-col mb-6'>
						<Image
							src='/images/stroitelstvo-domov/type/2.avif'
							alt='Кирпич'
							width={100} height={100}
							className="p-1 sd:mr-5 xz:mr-3"
						/>
						<div className=''>
							<h5 className='font-bold mb-3 text-xl'>
								Кирпич
							</h5>
							<p className=''>
								Строительство домов под ключ нередко не обходится без кирпича. В основе лежат глина, песок и вода, поэтому здесь уместно упомянуть экологичность такой технологии. Кирпич пропускает воздух, поэтому внутри помещений устанавливается благоприятный микроклимат.
							</p>
						</div>
					</div>
					<div className='flex sd:flex-row xz:flex-col mb-6'>
						<Image
							src='/images/stroitelstvo-domov/type/3.avif'
							alt='Газобетон'
							width={100} height={100}
							className="p-1 sd:mr-5 xz:mr-3"
						/>
						<div className=''>
							<h5 className='font-bold mb-3 text-xl'>
								Газобетон
							</h5>
							<p className=''>
								Изготавливается из песка, цемента и извести. На рынке можно найти блоки любой толщины, что позволяет подобрать оптимальный вариант. Использование газобетона является бюджетным способом возведения коробки дома, но не позволяет довести здание до нужных энергоэффективных технических характеристик.
							</p>
						</div>
					</div>
					<div className='flex sd:flex-row xz:flex-col mb-6'>
						<Image
							src='/images/stroitelstvo-domov/type/4.avif'
							alt='Керамоблок'
							width={100} height={100}
							className="p-1 sd:mr-5 xz:mr-3"
						/>
						<div className=''>
							<h5 className='font-bold mb-3 text-xl'>
								Керамоблок
							</h5>
							<p className=''>
								Прочный, теплый и экологически чистый материал не содержит вредных добавок. У керамоблока хорошая пропускная способность, поэтому внутри такого дома тепло и достаточно воздуха.
							</p>
						</div>
					</div>
					<div className='flex sd:flex-row xz:flex-col mb-6'>
						<Image
							src='/images/stroitelstvo-domov/type/5.avif'
							alt='Сип'
							width={100} height={100}
							className="p-1 sd:mr-5 xz:mr-3"
						/>
						<div className=''>
							<h5 className='font-bold mb-3 text-xl'>
								Сип
							</h5>
							<p className=''>
								Это своеобразная панель-сэндвич: между двух слоев фанеры размещается теплоизоляция. При соединении получается ровная поверхность, не требующая дополнительного утепления. Возводить стены легко, стоимость материала доступна.
							</p>
						</div>
					</div>
					<div className='flex sd:flex-row xz:flex-col mb-6'>
						<Image
							src='/images/stroitelstvo-domov/type/6.avif'
							alt='Каркас'
							width={100} height={100}
							className="p-1 sd:mr-5 xz:mr-3"
						/>
						<div className=''>
							<h5 className='font-bold mb-3 text-xl'>
								Каркас
							</h5>
							<p className=''>
								В основе домов из каркаса лежат не стены, а несущие каркасные конструкции. Они могут быть деревянными или стальными. Эту технологию любят использовать при строительстве домов в скандинаских странах и Канаде. Но эту технологию чаще используют для постройки дачных домиков.
							</p>
						</div>
					</div>
					<div className='flex sd:flex-row xz:flex-col mb-6'>
						<Image
							src='/images/stroitelstvo-domov/type/7.avif'
							alt='Дерево'
							width={100} height={100}
							className="p-1 sd:mr-5 xz:mr-3"
						/>
						<div className=''>
							<h5 className='font-bold mb-3 text-xl'>
								Дерево
							</h5>
							<p className=''>
								Строительство частных домов можно проводить из бревна и бруса. Они дают минимальную нагрузку на фундамент. Деревянные дома экологичны, они быстро прогреваются и охлаждаются.
							</p>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Tehnologiya