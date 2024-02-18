
import Foto from "@/components/SectionRemont/Foto"
import Portfolio from "@/components/SectionRemont/Portfolio"
import Stages from "@/components/SectionRemont/Stages"
import Works from "@/components/SectionRemont/Works"
import Social from "@/components/social/Social"

export const metadata = {
	title: 'Ремонт домов и квартир под ключ в Минске и области',
	description: 'Мы предоставляем полный спектр услуг по ремонту домов и квартир в Минске и области. Наша команда опытных специалистов готова воплотить в жизнь любые дизайнерские и архитектурные идеи. Обращайтесь к нам для качественного ремонта под ключ!',
	alternates: {
		canonical: ''
	}
};

const page = () => {
	return (
		<main className="">
			<section className='flex bg-cover min-h-screen' style={{ backgroundImage: 'url("/images/remont/fon.avif")' }}>
				<div className='sd:w-[248px] xz:w-14 border-r min-h-screen relative'>
					<Social />

					<div className='w-8 h-8 bg-primary absolute sd:top-20 xz:top-14 right-0' />
				</div>
				<div className='pt-40 sd:pl-5 xz:pl-3'>
					<h1 className='sd:text-8xl xz:text-6xl text-white font-bold'>
						Ремонт <span className="sd:text-6xl xz:text-3xl block">
							домов и квартир
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
						Ремонт под ключ в Минске и Минской области
					</h2>

					<p className='mt-10 font-semibold text-lg'>
						Ремонтно-строительная компания logo быстро и качественно выполнит ремонт под ключ.
					</p>

				</div>
			</section>

			<section className='flex'>
				<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
					<div className='relative'>
						<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>

						</div>
					</div>
				</div>
				<div className='sd:pt-14 xz:pt-8 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
					<h3 className='font-bold text-4xl'>
						Что logo ремонтирует под ключ?
					</h3>
					<p className='mt-4'>
						Мы эксперты по ремонтно-строительным работам жилой и коммерческой недвижимости в Минске и области. У наших сотрудников более 100 лет общего опыта. Принципы нашей работы заключаются в долгосрочном сотрудничестве, 75% заказов которые мы получаем приходят по рекомендации. Мы дорожим этим и ценим доверие наших заказчиков.
					</p>
				</div>
			</section>


			<section className='flex'>
				<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
					<div className='relative'>
						<div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>

						</div>
					</div>
				</div>
				<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
					<h4 className='font-bold text-4xl'>
						Когда нужен капитальный ремонт
					</h4>
					<p className='mt-4'>
						Запуск ремонта с дизайном под ключ однозначно необходим когда:
					</p>
					<p className='mt-3'>
						<span className="bg-primary px-1">Помещение изношено и имеет старый внешний вид: </span>{' '}
						ремонт помещений под ключ придаст вашему жилью новое дыхание. Мы разработаем современный дизайн проект иинтерьера соответствующее вашим вкусовым предпочтениям. Лофт, скандинавский, минимализм, классика - мы работаем с любыми направлениями.
					</p>
					<p className='mt-3'>
						<span className="bg-primary px-1">Мебель вышла из строя и отделочные материалы сильно изношены:  </span>{' '}
						краска уже давно не такого сочного и яркого цвета как раньше, инженерия и сантехника требует замены.
					</p>
					<p className='mt-3'>
						<span className="bg-primary px-1">Не хватает места:  </span>{' '}
						при помощи капитального ремонта под ключ с грамотным дизайн-проектом можно визуально увеличить пространство и полезную площадь.
					</p>
				</div>
			</section>

			<Foto />

			<Portfolio />

			<section className='flex'>
				<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2' />

				<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
					<h5 className='font-bold text-xl bg-primary px-1 inline-block'>
						Разработка дизайн проекта
					</h5>

					<p className='mt-4'>
						Дизайн-студия logo воплотит в реальность стильный дизайн-проект под ключ.
					</p>

					<p className='mt-3'>
						Разработки дизайн-проекта - один из самых значичимых этапов при создании проекта.  Это инструкция для специалистов на объекте. Мы подготовим для вас несколько вариантов, а в процессе вы можете вносить незначительные или существенные правки - все замечания будут учтены.
					</p>

					<p className='mt-3'>
						Основная задача дизайн-проекта - это максимально точная информация по проекту. Мебель, материалы, оборудование, игнженерные решения, даже расположение розеток и элементов декора будут содержаться в готовой визуализации - мы внимательны к деталям.
					</p>
				</div>
			</section>


			<section className='flex'>
				<div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2' />

				<div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
					<h5 className='font-bold text-xl bg-primary px-1 inline-block'>
						Авторский надзор
					</h5>

					<p className='mt-4'>
						Авторский надзор - это метод проверки выполнения ремонтных работ, согласно дизайн-проекту. При любых строительных работах подрядчик может отклониться от графика или существенно увеличить стоимость ремонтных работ.
					</p>

					<p className='mt-3'>
						Для экономии времени и срендств заказчика, дизайнер, разработавший проект, точно определит отклонения и причины их возникновения. Это обеспечит страховку от существенных задержек. Проверки в этом случае проводятся по оговоренному графику.
					</p>

					<p className='mt-3'>
						Все заметки касательно работ заносятся в рабочий онлайн журнал Авторского надзора, у заказчика есть к нему доступ т он см ожет с легкостью отследить возникшие нюансы.
					</p>
				</div>
			</section>

			<Stages />

			<Works />

		</main>
	)
}

export default page