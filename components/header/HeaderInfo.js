"use client"
import Image from "next/image"
import { useState } from "react";
import Modal3 from "../modal3/Modal3";
const HeaderInfo = () => {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleOrderClick = (product) => {
		setSelectedProduct(product);
		document.getElementById("my_modal_3").showModal();
	 };
	 const closeModal = () => {
		 document.getElementById("my_modal_3").close();
		 setSelectedProduct(null);
	 };
  

	return (
		<div className="">
			<div className='container mx-auto'>
				<div className='flex justify-between'>
					<div className='w-36 border-r'>

					</div>
					<div
						className='w-full flex justify-end items-center text-sm text-gray-800 bold pt-1'
					>
						<button
							className="btn btn-primary text-gray-700 btn-sm rounded-none bold"
							onClick={() => handleOrderClick('Напишите нам')}
						>
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
			<Modal3
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />

		</div>
	)
}

export default HeaderInfo