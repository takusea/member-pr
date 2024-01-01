import CardContent from "../base/CardContent";
import { styles } from "./CardContent.css.ts";

function CardContexnxt() {
	return (
		<CardContent>
			<div className={styles.column_2}>
				<div>
					<div className={`${styles.section}`}>
						<div className={styles.subheadline}>答える役</div>
						<h2 className={styles.headline}>カードを引いて質問に答える</h2>
						<p className={styles.desc}>
							自身の<b>過去の経験</b>や<b>価値観</b>
							からわかることをヒントに、思ったことを発言してみましょう！
						</p>
					</div>
					<div className={`${styles.section}`}>
						<div className={styles.subheadline}>深ぼる役</div>
						<h2 className={styles.headline}>回答に対して深ぼりする</h2>
						<p className={styles.desc}>
							カードをヒントに話を引き出せるような聞き方を考えてもOKです！
						</p>
					</div>
				</div>
				<img
					className={styles.img}
					width={262}
					height={375}
					src="images/step1_2.png"
					alt=""
				/>
			</div>
		</CardContent>
	);
}

export default CardContexnxt;
