interface ButtonProps {
	name: string;
	icon: React.ReactNode;
	href?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
}

export const Button = ({ name, icon, href, onClick, type }: ButtonProps) => {
	const baseStyle =
		"flex items-center text-center justify-center gap-2 px-6 py-3 text-lg font-medium bg-white text-black cursor-pointer rounded-full";
	if (type === "submit") {
		return (
			<button type="submit" onClick={onClick} className={baseStyle}>
				{icon}
				{name}
			</button>
		);
	}
	return (
		<a onClick={onClick} href={href} className={baseStyle}>
			{icon}
			{name}
		</a>
	);
};
