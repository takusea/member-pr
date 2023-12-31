import CardContent from "../base/CardContent";
import { styles } from "./CardContent.css.ts";

function CardContentss() {
	return (
		<CardContent>
			<div className={`${styles.section}`}>
				<div className={styles.subheadline}>みつける役</div>
				<h2 className={styles.headline}>
					他のメンバーはみつけた「才能」を記入する
				</h2>
				<p className={styles.desc}>
					みつけた才能を<b>１人につき１つ</b>
					は記入してください！思い付かない場合は深ぼり役以外のメンバーもどんどん質問していきましょう！
				</p>
			</div>
			<img className={styles.img} src="images/step1_3.png" alt="" />
		</CardContent>
	);
}

export default CardContentss;
