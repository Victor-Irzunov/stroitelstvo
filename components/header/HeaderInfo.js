import Image from "next/image"


const HeaderInfo = () => {
	return (
		<div className="">
			<div className='container mx-auto'>
				<div className='flex justify-between'>
					<div className='w-36 border-r'>

					</div>
					<div
						className='w-full flex justify-end items-center text-sm text-gray-800 bold pt-1'
					>
						<button className="btn btn-primary text-gray-700 btn-sm rounded-none bold">
							Напишите нам
						</button>

						<div className='flex ml-6 items-center'>
							<Image src='/images/svg/mail.svg' alt='Почта' width={25} height={25} />
							<p className='ml-2'>
								mail@gmail.com
							</p>
						</div>

						<div className='flex ml-4 items-center'>
							<Image src='/images/svg/phone.svg' alt='Почта' width={22} height={22} />
							<a href="tel:8029" className='ml-2'>
								+375 29 000-00-00
							</a>
						</div>

						<div className='flex ml-4 items-center'>
							<Image src='/images/svg/time.svg' alt='Почта' width={25} height={25} />
							<p className='ml-2'>
								пн-пт 8:00-18:00
							</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default HeaderInfo