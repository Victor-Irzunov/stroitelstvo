"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import HeaderInfo from './HeaderInfo';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
	const pathname = usePathname()
	const [activeLink, setActiveLink] = useState('');
	const [isMenuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		setActiveLink(pathname);
	}, [pathname]);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<header className="border-b fixed top-0 right-0 left-0 bg-white/40 backdrop-blur-md z-40">
			<div className='container mx-auto sd:block xz:hidden'>
				<HeaderInfo />
				<div className=''>
					<div className='flex justify-between items-end'>
						<div className='w-32 border-r'>
							<Link href='/' className='cursor-pointer'>
								<Image src='/images/logo/logo2.webp' alt='Логотип компании' width={83} height={83} />
							</Link>
						</div>
						<div className='pb-2'>
							<ul className='flex justify-between'>
								<li className={`ml-7 ${activeLink === '/stroitelstvo-domov' ? 'bg-primary' : ''}`}>
									<Link href='/stroitelstvo-domov' className='cursor-pointer py-3 px-3'>
										Строительство
									</Link>
								</li>
								<li className={`ml-7 ${activeLink === '/remont' ? 'bg-primary' : ''}`}>
									<Link href='/remont' className='cursor-pointer py-3 px-3'>
										Ремонт
									</Link>
								</li>
								<li className={`ml-7 ${activeLink === '/dizayin-iterera' ? 'bg-primary' : ''}`}>
									<Link href='/dizayin-iterera' className='cursor-pointer py-3 px-3'>
										Дизайн
									</Link>
								</li>
								<li className={`ml-7 ${activeLink === '/proekty' ? 'bg-primary' : ''}`}>
									<Link href='/proekty' className='cursor-pointer py-3 px-3'>
										Проекты
									</Link>
								</li>
								<li className={`ml-7 ${activeLink === '/kontakty' ? 'bg-primary' : ''}`}>
									<Link href='/kontakty' className='cursor-pointer py-3 px-3'>
										Контакты
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='container mx-auto sd:hidden xz:block py-2'>

				<div className='flex justify-between items-center'>
					<Image src='/images/logo/logo2.webp' alt='Логотип строительной компании' width={60} height={60} />
					<Image
						src='/images/svg/menu.svg'
						alt='Меню сайта строительной компании'
						width={40} height={40}
						onClick={toggleMenu}
					/>
				</div>

			</div>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						className={`fixed top-0 z-50 right-0 w-screen h-screen bg-black bg-opacity-95 text-white flex items-center justify-center sd:w-1/2 xz:w-full`}
					>
						<nav className="text-2xl font-semibold">
							<ul className="flex flex-col items-center space-y-6 text-white">
								<li className={`${activeLink === '/' ? 'bg-primary text-black' : ''} px-4 py-1`}>
									<Link
										href="/"
										onClick={toggleMenu}
									>
										Главная
									</Link>
								</li>
								<li className={`${activeLink === '/stroitelstvo-domov' ? 'bg-primary text-black' : ''} px-4 py-1`}>
									<Link
										href="/stroitelstvo-domov"
										onClick={toggleMenu}
									>
										Строительство
									</Link>
								</li>
								<li className={`${activeLink === '/remont' ? 'bg-primary text-black' : ''} px-4 py-1`}>
									<Link
										href="/remont"
										onClick={toggleMenu}
									>
										Ремонт
									</Link>
								</li>
								<li className={`${activeLink === '/dizayin-iterera' ? 'bg-primary text-black' : ''} px-4 py-1`}>
									<Link
										href="/dizayin-iterera"
										onClick={toggleMenu}
									>
										Дизайн
									</Link>
								</li>
								<li className={`${activeLink === '/proekty' ? 'bg-primary text-black' : ''} px-4 py-1`}>
									<Link
										href="/proekty"
										onClick={toggleMenu}
									>
										Проекты
									</Link>
								</li>
								<li className={`${activeLink === '/kontakty' ? 'bg-primary text-black' : ''} px-4 py-1`}>
									<Link
										href="/kontakty"
										onClick={toggleMenu}
									>
										Контакты
									</Link>
								</li>
							</ul>
						</nav>
						<div className="absolute top-6 right-6">
							<Image
								src="/images/svg/close.svg"
								alt="Закрыть меню"
								width={50}
								height={50}
								onClick={closeMenu}
								className="cursor-pointer"
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}
