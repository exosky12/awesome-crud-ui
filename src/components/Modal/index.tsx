import React from "react";
import { Button } from "@/components/Button";
import { X } from "lucide-react";

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
				{children}
				<Button
					style="w-full mt-2 !bg-red-500"
					name="Cancel"
					icon={<X />}
					onClick={(e) => {
						if (e) {
							e.stopPropagation();
							onClose();
						}
					}}
				/>
			</div>
		</div>
	);
};
