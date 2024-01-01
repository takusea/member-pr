import { styles } from "./top.css.ts";
import LinkButton from "../components/base/LinkButton";

function Top() {
	return (
		<div className={styles.container}>
			<img src="images/logo.png" alt="" />
			<p className={styles.text}>
				対話を通してお互いの強みをみつけ、
				<br />
				メンバーの魅力をPRする制作物を作ろう！
			</p>
			<div className={styles.button_container}>
				<LinkButton to="/product">制作物を見る</LinkButton>
				<LinkButton to="/start" type="fill">
					開始する
				</LinkButton>
			</div>
			<div>人数：5〜7名　時間：120分</div>
		</div>
	);
}

export default Top;
