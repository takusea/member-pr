import CardContent from "../base/CardContent.tsx";
import { styles } from "./CardContent.css.ts";

function CardContentV() {
	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<p className={`${styles.desc}`}>
					チームでの制作お疲れ様でした！最後にメンバーの強みをどのように
				</p>
				<p className={`${styles.desc}`}>
					反映させたのか、代表者の方はこだわりを教えてください！
				</p>
			</div>
			<img className={styles.img} src="images/step4_1.png" alt="" />
		</CardContent>
	);
}

export default CardContentV;
