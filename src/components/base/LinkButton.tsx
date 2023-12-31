import { Link } from "react-router-dom";
import { styles } from "./Button.css.ts";
import Icon from "./Icon.tsx";

type ButtonType = "text" | "outline" | "fill";

type Props = {
	type?: ButtonType;
	children: string;
	to: string;
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
			<Link
				to={!props.disabled ? props.to : ""}
				className={`${styles.root} ${getStyle(props.type)} ${
					props.iconRightSide ?? styles.root_reverse
				} ${props.disabled ? styles.root_disabled : ""}`}
			>
				{props.children}
				{props.icon ? <Icon name={props.icon} /> : ""}
			</Link>
		</>
	);
}

export default Button;
