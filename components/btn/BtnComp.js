"use client"
import { useState } from "react";
import Modal from "../modal/Modal"

export const BtnComp = ({ title }) => {

	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleOrderClick = (prod) => {
		setSelectedProduct(prod);
	};
	const closeModal = () => {
		setSelectedProduct(null)
	};
	return (
		<>
			<button
				className={`btn btn-primary border-none mt-16  btn-lg shadow-xl rounded-none uppercase`}
				onClick={() => handleOrderClick(title)}
			>
				{title}
			</button>

			<Modal
				selectedProduct={selectedProduct}
				closeModal={closeModal}
				isFormSubmitted={isFormSubmitted}
				setIsFormSubmitted={setIsFormSubmitted}
			/>

		</>
	)
}
