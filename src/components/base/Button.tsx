import { styles } from "./Button.css.ts";

type ButtonType = "text" | "outline" | "fill";

type Props = {
	type?: ButtonType;
	children: string;
	onClick: () => void;
	iconPath?: string;
	iconRightSide?: boolean;
	disabled?: boolean;
};

const getStyle = (type: ButtonType | undefined) => {
	switch (type) {
		case "text":
			return styles.root_text;
		case "outline":
			return styles.root_outline;
		case "fill":
			return styles.root_fill;
		default:
			return styles.root_outline;
	}
};

function Button(props: Props) {
	return (
		<>
			<button
				type="button"
				className={`${styles.root} ${getStyle(props.type)} ${
					props.iconRightSide ?? styles.root_reverse
				}`}
				onClick={props.onClick}
				disabled={props.disabled}
			>
				{props.children}
				<img src={props.iconPath} alt="" />
			</button>
		</>
	);
}

export default Button;
