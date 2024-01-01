import CardContent from "../base/CardContent";
import { styles } from "./CardContent.css.ts";

function CardContentV() {
	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<p className={`${styles.desc}`}>
					2種類のカードを使って才能をみつけるための対話を行ないます！
				</p>
				<p className={`${styles.desc}`}>
					1人ずつ答える役と深ぼる役になり、対話の順番を回していきましょう。
				</p>
			</div>
			<img
				className={styles.img}
				width={505}
				height={264}
				src="images/step1_1.png"
				alt=""
			/>
		</CardContent>
	);
}

export default CardContentV;
