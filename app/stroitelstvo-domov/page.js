import Deadlines from "@/components/SectionStroitelstvo/Deadlines"
import Garantii from "@/components/SectionStroitelstvo/Garantii"
import Payment from "@/components/SectionStroitelstvo/Payment"
import Stroitelstvo from "@/components/SectionStroitelstvo/Stroitelstvo"
import Tehnologiya from "@/components/SectionStroitelstvo/Tehnologiya"
import VidyDomov from "@/components/SectionStroitelstvo/VidyDomov"
import Why from "@/components/SectionStroitelstvo/Why"
import { BtnComp } from "@/components/btn/BtnComp"
import Social from "@/components/social/Social"


export const metadata = {
	title: 'Строительство домов и дачь под ключ в Минске и области',
	description: 'Мы предлагаем полный цикл услуг по строительству домов и дач в Минске и области. Наша команда профессионалов обеспечит качественное выполнение всех работ, начиная от проектирования и заканчивая сдачей объекта под ключ. Обращайтесь к нам для создания вашего идеального дома или дачи!',
	alternates: {
		canonical: ''
	}
};

const page = () => {


	return (
		<main className="">
			<section className='bg-cover min-h-screen xz:hidden sd:flex' style={{ backgroundImage: `url("/images/stroitelstvo-domov/fon.webp")` }}>
				<div className='sd:w-[248px] xz:w-14 border-r min-h-screen relative'>
					<Social />

					<div className='w-8 h-8 bg-primary absolute xz:top-14 sd:top-20 right-0' />
				</div>
				<div className='pt-40 sd:pl-5 xz:pl-3'>
					<h1 className='sd:text-8xl xz:text-4xl text-white font-bold'>
						Строительство <span className="sd:text-6xl xz:text-3xl block">
							домов
						</span>
					</h1>

					{/* <button className="btn btn-primary sd:w-72 xz:w-64 sd:btn-lg xz:btn-md shadow-2xl rounded-none mt-16 uppercase">
						Напишите нам
					</button> */}

					<BtnComp title='Напишите нам'/>

				</div>
			</section>

			<section className='bg-cover min-h-screen xz:flex sd:hidden' style={{ backgroundImage: `url("/images/stroitelstvo-domov/fon-xz.avif")` }}>
				<div className='sd:w-[248px] xz:w-14 border-r min-h-screen relative'>
					<Social />

					<div className='w-8 h-8 bg-primary absolute xz:top-14 sd:top-20 right-0' />
				</div>
				<div className='pt-40 sd:pl-5 xz:pl-3'>
					<h1 className='sd:text-7xl xz:text-4xl text-white font-bold'>
						Строительство <span className="sd:text-6xl xz:text-3xl block">
							домов
						</span>
					</h1>

					<button className="btn btn-primary sd:w-72 xz:w-64 sd:btn-lg xz:btn-md shadow-2xl rounded-none mt-16 uppercase">
						Напишите нам
					</button>

				</div>
			</section>

			<section className='flex'>
				<div className='sd:min-w-[248px] xz:min-w-14 border-r'>
					<Social />
				</div>
				<div className='pt-20 sd:pl-5 xz:pl-3'>
					<h2 className='bg-primary font-semibold text-2xl px-1 inline-block'>
						Строительство домов Минск и Минская область
					</h2>

					<p className='mt-10 font-semibold text-lg'>
						Хотите приобрести свой дом, но не знаете с чего начать? Наша компания поможет вам стать обладателем дома мечты, построив его с нуля под ключ, с учетом всех пожеланий и потребностей. Мы беремся за любую сложность работ: и за маленький дачный домик, и за шикарный коттедж для большой семьи.
					</p>
					<p className='mt-3 font-semibold text-lg'>
						Вы можете приобрести землю и получить разрешение на строительство в пригороде, чтобы жить вдали от шума, грязи и суеты. Предпочитаете оставаться в черте города? Строительство частного дома или таунхауса можно осуществить под ключ в Киеве, а также и в любом из населенных пунктов.
					</p>
				</div>
			</section>

			<VidyDomov />

			<Tehnologiya />

			<Stroitelstvo />

			<Deadlines />

			<Garantii />

			<Why />

			<Payment />



		</main>
	)
}

export default page