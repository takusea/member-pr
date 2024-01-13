import CardContent from "../base/CardContent.tsx";
import { styles } from "./CardContent.css.ts";

function CardContentV() {
	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<p className={`${styles.desc}`}>
					ワークショップにご参加いただきありがとうございました。
				</p>
			</div>
			<img
				className={styles.img}
				width={562}
				height={262}
				src="images/step4_3.png"
				alt=""
			/>
		</CardContent>
	);
}

export default CardContentV;
