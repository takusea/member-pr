import { styles } from "./Button.css.ts";

type Props = {
	children: string;
	onClick: () => void;
	iconPath?: string;
	iconRightSide?: boolean;
};

function Button(props: Props) {
	return (
		<>
			<button
				type="button"
				className={`${styles.root} ${
					props.iconRightSide ?? styles.root_reverse
				}`}
				onClick={props.onClick}
			>
				{props.children}
				<img src={props.iconPath} alt="" />
			</button>
		</>
	);
}

export default Button;
