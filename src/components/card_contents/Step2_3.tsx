import CardContent from "../base/CardContent.tsx";
import { styles } from "./CardContent.css.ts";

function CardContentss() {
	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<p className={`${styles.desc}`}>
					次に「才能」と「興味」の中から上手く掛け合わせそうなペアを見つけ、
				</p>
				<p className={`${styles.desc}`}>
					強みの欄に移動させてください！ペア数はいくつでもOKです。
				</p>
			</div>
			<img className={styles.img} src="images/step2_3.png" alt="" />
		</CardContent>
	);
}

export default CardContentss;
