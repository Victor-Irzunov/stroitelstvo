import Image from "next/image"

export const Footer = () => {
	return (
		<footer className="bg-[#1A1A1A] z-50 relative">

			<div className='flex justify-center'>
				<div className='sd:block xz:hidden w-1/2'>
					<Image src='/images/footer-img.webp' alt='Контактная информация строительной организации' width={1080} height={1080} />
				</div>
				<div className='py-16 px-8'>

					<div className='flex sd:flex-row xz:flex-col'>
						<div className=''>
							<p className='text-[#8C8C8C] text-sm font-semibold'>
								Офис
							</p>
							<div className='flex mt-3'>
								<Image src='/images/svg/phone.svg' alt='Телефон строительной организации' width={20} height={20} />
								<a href="tel:8029" className="text-white ml-2 text-lg">
									+375(29) 000-00-00
								</a>
							</div>
							<div className='flex mt-3'>
								<Image src='/images/svg/phone.svg' alt='Телефон строительной организации' width={20} height={20} />
								<a href="tel:8029" className="text-white ml-2 text-lg">
									+375(33) 000-00-00
								</a>
							</div>
						</div>
						<div className='sd:ml-10 xz:ml-0'>
							<p className='text-[#8C8C8C] text-sm font-semibold'>
								Для клиентов
							</p>
							<div className='flex mt-3'>
								<Image src='/images/svg/phone.svg' alt='Телефон строительной организации' width={20} height={20} />
								<a href="tel:8029" className="text-white ml-2 text-lg">
									+375(29) 000-00-00
								</a>
							</div>
							<div className='flex mt-3'>
								<Image src='/images/svg/phone.svg' alt='Телефон строительной организации' width={20} height={20} />
								<a href="tel:8029" className="text-white ml-2 text-lg">
									+375(33) 000-00-00
								</a>
							</div>
						</div>
					</div>
					<div className='flex sd:flex-row xz:flex-col mt-8'>
						<div className=''>
							<p className='text-[#8C8C8C] text-sm font-semibold'>
								Адрес
							</p>
							<div className='flex mt-3'>
								<Image src='/images/svg/map.svg' alt='Адрес строительной организации' width={20} height={20} />
								<p className="text-white ml-2 text-lg">
									РБ г. Минск, ул. К.Туровского 8
								</p>
							</div>
						</div>
						<div className='sd:ml-10 xz:ml-0'>
							<p className='text-[#8C8C8C] text-sm font-semibold'>
								Почта
							</p>
							<div className='flex mt-3'>
								<Image src='/images/svg/mail.svg' alt='Адрес строительной организации' width={20} height={20} />
								<p className="text-white ml-2 text-lg">
									info@gmail.com
								</p>
							</div>
						</div>
					</div>
					<div className='flex sd:flex-row xz:flex-col mt-8'>
						<div className=''>
							<p className='text-[#8C8C8C] text-sm font-semibold'>
								Связь с нами
							</p>
							<div className='flex items-center mt-3'>
								<a href="" className="mx-2">
									<Image src='/images/svg/telegram.svg' alt='Связь с строительной организации' width={24} height={24} />
								</a>
								<a href="" className="mx-2">
									<Image src='/images/svg/viber.svg' alt='Связь с строительной организации' width={21} height={21} />
								</a>
								<a href="" className="mx-2">
									<Image src='/images/svg/instagram.svg' alt='Связь с строительной организации' width={25} height={25} />
								</a>
							</div>
						</div>
					</div>

					<div className='w-full mt-10'>
						<p className='text-[#8C8C8C] text-sm font-semibold mb-4'>
							Мы на карте
						</p>
						<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A00ce747d45bd68a20d38903655600d7de2c396fb51d4288269a59b03895187d0&amp;source=constructor" width="100%" height="300" frameBorder="0"></iframe>
					</div>
				</div>


			</div>

			<aside className="border-t border-black py-2 text-center sd:px-0 xz:px-4">
				<p className='text-white/55 xs:text-xs xz:text-[10px] font-light' >
					Copyright © 2024 | Разработка и Продвижение
					<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-700 underline'> VI:TECH</a>.
					{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
				</p>
			</aside>
		</footer>
	)
}
