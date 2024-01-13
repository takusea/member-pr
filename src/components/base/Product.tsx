import { styles } from "./Product.css.ts";

type Props = {
	createdDate: string;
	imagePath: string;
};

function Button(props: Props) {
	return (
		<div className={styles.root}>
			<img className={styles.image} src={props.imagePath} alt="" />
			<p className={styles.date}>制作日 {props.createdDate}</p>
		</div>
	);
}

export default Button;
