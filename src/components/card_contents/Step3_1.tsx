import CardContent from "../base/CardContent.tsx";
import { styles } from "./CardContent.css.ts";

function CardContentV() {
	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<p className={`${styles.desc}`}>
					メンバーの魅力を伝えるための制作物をチームで作っていきます！
				</p>
				<p className={`${styles.desc}`}>
					以下の4つの中から制作物のお題を選び、PRするメンバーを決めてください。
				</p>
			</div>
			<img
				className={styles.img}
				width={838}
				height={244}
				src="images/step3_1.png"
				alt=""
			/>
		</CardContent>
	);
}

export default CardContentV;
