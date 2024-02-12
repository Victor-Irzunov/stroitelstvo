import Image from "next/image"


const Social = () => {
	return (
		<div className="flex flex-col fixed bottom-0 sd:left-52 xz:left-6 z-20">
			<Image src='/images/svg/instagram.svg' alt='Наш инстаграм' width={28} height={28} className="my-1" />
			<Image src='/images/svg/telegram.svg' alt='Наш телегармм' width={28} height={28} className="my-1" />
			<Image src='/images/svg/viber.svg' alt='Наш вайбер' width={26} height={26} className="my-1" />
			<Image src='/images/svg/youtube.svg' alt='Наш ютуб' width={28} height={28} className="my-1" />
		</div>
	)
}

export default Social