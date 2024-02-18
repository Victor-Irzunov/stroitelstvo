import Image from "next/image"

const Why = () => {
	return (
		<section className='flex'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
				<div className='relative'>
					<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
						logo
					</div>
				</div>
			</div>

			<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
				<h5 className='font-bold text-4xl'>
					Почему logo?
				</h5>

				<p className='mt-4'>
					С чего начинать строительство дома? С обращения в нашу компанию! У нас большой опыт работы, мы знаем все нюансы:
				</p>

				<ul className='mt-3'>
					<li className='flex items-center'>
						<Image src='/images/svg/dash.svg' alt='сколько стоит строительство домов' width={50} height={2} />
						<p className=''>
							сколько стоит строительство домов;
						</p>
					</li>
					<li className='flex items-center'>
						<Image src='/images/svg/dash.svg' alt='сколько уйдет времени' width={50} height={2} />
						<p className=''>
							сколько уйдет времени;
						</p>
					</li>
					<li className='flex items-center'>
						<Image src='/images/svg/dash.svg' alt='сколько уходит сырья' width={50} height={2} />
						<p className=''>
							сколько уходит сырья;
						</p>
					</li>
					<li className='flex items-center'>
						<Image src='/images/svg/dash.svg' alt='сколько денег нужно заложить' width={50} height={2} />
						<p className=''>
							сколько денег нужно заложить;
						</p>
					</li>
					<li className='flex items-center'>
						<Image src='/images/svg/dash.svg' alt='где заказать и как заказать материалы' width={50} height={2} />
						<p className=''>
							где заказать и как заказать материалы;
						</p>
					</li>
					<li className='flex items-center'>
						<Image src='/images/svg/dash.svg' alt='какие документы нужны' width={50} height={2} />
						<p className=''>
							какие документы нужны;
						</p>
					</li>
					<li className='flex items-center'>
						<Image src='/images/svg/dash.svg' alt='какие разрешения нужны и как их получить' width={50} height={2} />
						<p className=''>
							какие разрешения нужны и как их получить;
						</p>
					</li>
					<li className='flex items-center'>
						<Image src='/images/svg/dash.svg' alt='как выбрать технологию строительства' width={50} height={2} />
						<p className=''>
							как выбрать технологию строительства;
						</p>
					</li>
					<li className='flex items-center'>
						<Image src='/images/svg/dash.svg' alt='сколько стоит работа' width={50} height={2} />
						<p className=''>
							сколько стоит работа;
						</p>
					</li>
					<li className='flex items-center'>
						<Image src='/images/svg/dash.svg' alt='сколько нужно блоков' width={50} height={2} />
						<p className=''>
							сколько нужно блоков.
						</p>
					</li>
				</ul>

				<p className='mt-5'>
					Мы трудимся "в белую" и не работаем без разрешительной документации. Предоставляем расчет с оценкой стоимости, чтобы вы могли оценить, подходят ли вам наши услуги.
				</p>

			</div>
		</section>
	)
}

export default Why