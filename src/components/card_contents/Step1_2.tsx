import CardContent from "../base/CardContent";
import { styles } from "./CardContent.css.ts";

function CardContexnxt() {
	return (
		<CardContent>
			<div>
				<div>
					<div className={styles.subheadline}>答える役</div>
					<h2 className={styles.headline}>カードを引いて質問に答える</h2>
					<p className={styles.desc}>
						自身の<b>過去の経験</b>や<b>価値観</b>
						からわかることをヒントに、思ったことを発言してみましょう！
					</p>
					<div className={styles.subheadline}>深ぼる役</div>
					<h2 className={styles.headline}>回答に対して深ぼりする</h2>
					<p className={styles.desc}>
						カードをヒントに話を引き出せるような聞き方を考えてもOKです！
					</p>
				</div>
				<img src="images/step1_1.png" alt="" />
			</div>
		</CardContent>
	);
}

export default CardContexnxt;
