import Image from "next/image"


const Foto = () => {
	return (
		<section className='flex relative'>
			<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2' />

			<div className=''>
				<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
					<div className='sd:absolute xz:static top-20 left-0'>
						<Image src='/images/remont/1.avif' alt='Квартиры' width={570} height={208} />
					</div>
					<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
						<div className=''>
							<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
								Квартиры
							</h4>
							<p className='sd:text-lg xz:text-base'>
								Капитальный дизайнерский ремонт под ключ квартир требует тщательной подготовки и реализации дизайн-проекта в точном соответствии с пожеланием заказчика. Мы поможем осуществить ремонт в любом стиле и любой сложности.
							</p>
						</div>
					</div>
				</div>
				<div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
					<div className='sd:absolute xz:static  left-0'>
						<Image src='/images/remont/2.avif' alt='Дома' width={570} height={208} />
					</div>
					<div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
						<div className=''>
							<h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
								Дома
							</h4>
							<p className='sd:text-lg xz:text-base'>
								Если у вас уже есть построенный дом, мы сможем разработать дизайн-проект для всех помещений как с нуоя, так и преобразовать и обновить уже существующий ремонт, если он устарел или требует редизайна. В старых домах может потребоваться дополнительная работа по обновлению проводки, сантехники и других систем, что сделает ваш ремонт более дорогостоящим и трудоемким.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Foto