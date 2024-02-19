"use client"
import { sendOrderTelegram } from '@/http/telegramAPI';
import { useState } from 'react';


const FormOrder = ({ selectedProduct, closeModal, setIsFormSubmitted, title, btn }) => {
	console.log("🚀 🚀 🚀  _ FormOrder _ selectedProduct:", selectedProduct)
	const [formData, setFormData] = useState({ phone: '', message: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		let messageForm = `<b>Заказ с сайта Строительство и ремонт:</b>\n`
		messageForm += `<b>${selectedProduct} </b>\n`
		messageForm += `<b>--------------- </b>\n`
		messageForm += `<b>Телефон:</b> ${formData.phone}\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Сообщение: ${formData.message} </b>\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					setIsFormSubmitted(true);
					setTimeout(() => {
						closeModal()
					}, 3000)

				}
			})
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className={`w-full sd:px-12 ${title ? 'xz:px-5': 'xz:px-2'} sd:py-4 xz:py-5`}>
			{/* <p className='text-black uppercase font-bold text-center mb-5 text-xl'>
				{
					selectedProduct 
				}
			</p> */}

			<form className="text-black" onSubmit={handleSubmit}>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Телефон</span>
						<span className="label-text-alt">Обязательное поле</span>
					</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Ваш телефон"
						className="input input-bordered xz:input-sm sd:input-lg"
						required
					/>
				</div>
				<div className="form-control mt-3">
					<label className="label">
						<span className="label-text">Сообщение</span>
						<span className="label-text-alt">Необязательное поле</span>
					</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="textarea textarea-bordered xz:textarea-sm sd:textarea-lg"
						placeholder="Ваше сообщение"
					></textarea>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-primary font-bold" type="submit">
						{btn}
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormOrder;
