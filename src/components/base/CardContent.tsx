import { ReactNode } from "react";
import { styles } from "./CardContent.css.ts";

type Props = {
	children: ReactNode;
};

function Card(props: Props) {
	return <div className={styles.root}>{props.children}</div>;
}

export default Card;
