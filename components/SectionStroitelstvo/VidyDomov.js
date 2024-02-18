import Image from "next/image";


const VidyDomov = () => {
  return (
    <section className='flex relative'>
      <div className='sd:min-w-[248px] xz:min-w-14 border-r pt-16 sd:pr-11 xz:pr-2'>
        <div className='relative'>
          <div className='pl-5 text-gray-600 before-text text-right uppercase sd:block xz:hidden'>
            виды
          </div>
        </div>
      </div>

      <div className='sd:pt-14 xz:pt-0 sd:pl-10 xz:pl-3 xz:pb-16 sd:pb-0'>
        <h3 className='font-bold text-4xl'>
          Виды домов
        </h3>

        <p className='mt-9 font-semibold text-lg'>
          С чего начинать строительство дома? Конечно, с определения его типа. У нас можно заказать строительство частных домов в Киеве и Киевской области разных видов.
        </p>

        <div className='mt-12 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
          <div className='sd:absolute xz:static top-64 left-0'>
            <Image src='/images/stroitelstvo-domov/kottedzh.webp' alt='строительство коттеджа' width={570} height={208} />
          </div>
          <div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
            <div className=''>
              <h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
                Коттедж
              </h4>
              <p className='sd:text-lg xz:text-base'>
                Мы строим коттеджи под ключ по суперсовременным технологиям. Тщательно продуманная планировка, выбор оптимальных материалов при строительстве для регуляции температуры зимой и летом существенно сократят будущие расходы на обслуживание коттеджа после заселения.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-16 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
          <div className='sd:absolute xz:static  left-0'>
            <Image src='/images/stroitelstvo-domov/taunhaus.webp' alt='строительство Таунхауса' width={570} height={208} />
          </div>
          <div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
            <div className=''>
              <h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
                Таунхаус
              </h4>
              <p className='sd:text-lg xz:text-base'>
                Все большую популярность последние годы набирают таунхаусы. Вы будете жить в окружении людей, но в то же время получите пространство и собственный дворик. У таунхаусов нет существенных отличий в технологии строительства, кроме одного: одна общая стена, которая объединяет два соседних дома, будет всегда теплой. Поэтому отапливать таунхаусы в зимнее время немного выгоднее. Еще одно преимущество - за счет компактного расположения по соседству сразу нескольких монотипных домов цена может быть куда доступнее, чем строительство отдельного коттеджа.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-16 flex sd:flex-row xz:flex-col sd:justify-end xz:justify-start sd:min-h-[50vh] xz:min-h-max'>
          <div className='sd:absolute xz:static  left-0'>
            <Image src='/images/stroitelstvo-domov/dacha.webp' alt='строительство Дачи' width={570} height={208} />
          </div>
          <div className='sd:w-2/3 xz:w-full sd:mt-0 xz:mt-6 flex flex-col justify-center'>
            <div className=''>
              <h4 className='font-bold text-2xl bg-primary inline-block px-1 mb-3'>
                Дача
              </h4>
              <p className='sd:text-lg xz:text-base'>
                Дача — это место для летнего отдыха. Она не предназначена для постоянного проживания, поэтому функциональное наполнение помещений, наружная отделка будут минималистичнее. Главное — наличие всех удобств. Хотя и в случае с дачей все зависит исключительно от пожеланий и потребностей заказчика.
                <br />
                Возведение дачных домов возможно тремя способами:
              </p>
              <ul className=''>
                <li className='flex items-center'>
                  <Image src='/images/svg/dash.svg' alt='Способ возведения домов' width={50} height={2} />
                  <p className=''>
                    возведение коробки, присутствует только фундамент и кровля;
                  </p>
                </li>
                <li className='flex items-center'>
                  <Image src='/images/svg/dash.svg' alt='Способ возведения домов' width={50} height={2} />
                  <p className=''>
                    наличие отделки, остекление и фасад, проведены внутренние отделочные работы, вам останется только внести мебель и технику;
                  </p>
                </li>
                <li className='flex items-center'>
                  <Image src='/images/svg/dash.svg' alt='Способ возведения домов' width={50} height={2} />
                  <p className=''>
                    строительство частного дома под ключ, контроль всех этапов от проектирования до завершения всех работ по внутренней отделке.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default VidyDomov;