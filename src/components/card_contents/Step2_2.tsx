import CardContent from "../base/CardContent.tsx";
import { styles } from "./CardContent.css.ts";

function CardContexnxt() {
	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<p className={`${styles.desc}`}>
					「興味」の欄に仕事やプライベートでやってて楽しいと感じること、
				</p>
				<p className={`${styles.desc}`}>
					やりたいと思っていることなど、あなたが興味のあることを記入してください！
				</p>
			</div>
			<img className={styles.img} src="images/step2_2.png" alt="" />
		</CardContent>
	);
}

export default CardContexnxt;
