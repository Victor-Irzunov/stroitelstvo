import Image from "next/image"
import HeaderInfo from "./HeaderInfo"

export const Header = () => {
	return (
		<header className="border-b fixed top-0 right-0 left-0 bg-white z-40">
			<div className='container mx-auto sd:block xz:hidden'>
				<HeaderInfo />
				<div className=''>
					<div className='flex justify-between items-end'>
						<div className='w-32 border-r'>
							<Image src='/images/logo/logo2.webp' alt='Логотип компании' width={83} height={83} />
						</div>
						<div className='pb-2'>
							<ul className='flex justify-between'>
								<li className='ml-7'>
									Строительство
								</li>
								<li className='ml-7'>
									Ремонт
								</li>
								<li className='ml-7'>
									Дизайн
								</li>
								<li className='ml-7'>
									Проекты
								</li>
								<li className='ml-7'>
									Контакты
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='container mx-auto sd:hidden xz:block py-2'>

				<div className='flex justify-between items-center'>
					<Image src='/images/logo/logo2.webp' alt='Логотип строительной компании' width={60} height={60} />
					<Image src='/images/svg/menu.svg' alt='Меню сайта строительной компании' width={40} height={40} />
				</div>

			</div>
		</header>
	)
}
