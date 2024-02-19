import React from "react";
import FormOrder from "../Form/Form";

const Modal3 = ({ selectedProduct, closeModal, isFormSubmitted, setIsFormSubmitted }) => {
	return (
		<dialog id="my_modal_3" className="modal">
			{selectedProduct && (
				<div className="modal-box text-black">
					<h3 className="font-semibold text-lg">{`${selectedProduct}`}</h3>
					<p className="py-1 mt-3 text-sm text-gray-600">
						Пожалуйста, заполните данные в форме и мы вам перезвоним.
					</p>
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
					<FormOrder
						selectedProduct={selectedProduct}
						closeModal={closeModal}
						setIsFormSubmitted={setIsFormSubmitted}
						btn='Отправить'
					/>
				</div>
			)}
		</dialog>
	);
};

export default Modal3;
