import React from "react";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="relative inset-0 flex items-center justify-center mt-2">
			<div className="w-full p-6 rounded-lg">
				<button
					onClick={(e) => {
						e.stopPropagation();
						onClose();
					}}
					className="absolute text-gray-600 top-2 right-2"
				>
					X
				</button>
				{children}
			</div>
		</div>
	);
};
