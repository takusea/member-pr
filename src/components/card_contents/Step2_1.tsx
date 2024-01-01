import CardContent from "../base/CardContent.tsx";
import { styles } from "./CardContent.css.ts";

function CardContentV() {
	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<p className={`${styles.desc}`}>
					メンバーがみつけてくれた「才能」を確認してください！
				</p>
				<p className={`${styles.desc}`}>
					以下の公式に従って、自身の強みとなるものをみつけていきます。
				</p>
			</div>
			<img
				className={styles.img}
				width={684}
				height={256}
				src="images/step2_1.png"
				alt=""
			/>
		</CardContent>
	);
}

export default CardContentV;
