import CardContent from "../base/CardContent.tsx";
import { styles } from "./CardContent.css.ts";

function CardContentss() {
	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<p className={`${styles.desc}`}>
					自分の強みはこれかもしれない、この才能はやりたいことに活かせるかも！
				</p>
				<p className={`${styles.desc}`}>
					と感じていただけたら、その発見をみんなに伝えていきましょう！
				</p>
			</div>
			<img className={styles.img} src="images/step2_4.png" alt="" />
		</CardContent>
	);
}

export default CardContentss;
