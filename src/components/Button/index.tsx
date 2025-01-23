import type { FormEvent } from "react";

type ButtonProps = {
	name: string;
	icon?: React.ReactNode;
	href?: string;
	style?: string;
	onClick?: (e?: FormEvent) => void;
	type?: "button" | "submit" | "reset";
};

export const Button = ({
	name,
	icon,
	href,
	onClick,
	style,
	type = "button",
}: ButtonProps) => {
	const baseStyle =
		"flex items-center text-center justify-center gap-2 px-6 py-3 text-lg font-medium bg-white text-black cursor-pointer rounded-full";

	if (href) {
		return (
			<a href={href} onClick={onClick} className={`${baseStyle} ${style}`}>
				{icon}
				{name}
			</a>
		);
	}

	return (
		<button type={type} onClick={onClick} className={`${baseStyle} ${style}`}>
			{icon}
			{name}
		</button>
	);
};
