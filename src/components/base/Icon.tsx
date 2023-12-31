import { styles } from "./Icon.css.ts";

type Props = {
	name: string;
};

function Icon(props: Props) {
	return (
		<svg className={styles.root} width={24} height={24}>
			<title>{props.name}</title>
			<use xlinkHref={`icons/${props.name}.svg#icon`} />
		</svg>
	);
}

export default Icon;
