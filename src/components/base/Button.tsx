import { styles } from "./Button.css.ts";
import Icon from "./Icon.tsx";

type ButtonType = "text" | "outline" | "fill";

type Props = {
	type?: ButtonType;
	children: string;
	onClick: () => void;
	icon?: string;
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
				{props.icon ? <Icon name={props.icon} /> : ""}
			</button>
		</>
	);
}

export default Button;
