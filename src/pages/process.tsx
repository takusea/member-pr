import LinkButton from "../components/base/LinkButton.tsx";
import ProcessButton from "../components/base/ProcessButton.tsx";
import { styles } from "./process.css.ts";

function Process() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>ワークショップの手順</h1>
				<div className={styles.home_button}>
					<LinkButton type="text" iconRightSide icon="home" to="/">
						ホーム
					</LinkButton>
				</div>
			</div>
			<div className={styles.process_list}>
				<div className={styles.process_lower}>
					<ProcessButton
						subText="カードを使って"
						mainText="対話をする"
						step="1"
						minutes="40"
					/>
				</div>
				<div className={styles.process_upper}>
					<ProcessButton
						subText="自身の強みを"
						mainText="みつける"
						step="2"
						minutes="15"
					/>
				</div>
				<div className={styles.process_lower}>
					<ProcessButton
						subText="お題に合わせて"
						mainText="制作する"
						step="3"
						minutes="40"
					/>
				</div>
				<div className={styles.process_upper}>
					<ProcessButton
						subText="メンバーの魅力を"
						mainText="PRする"
						step="4"
						minutes="15"
					/>
				</div>
			</div>
			<div className={styles.footer}>
				<LinkButton type="text" icon="left_arrow" to="/start">
					戻る
				</LinkButton>
				<LinkButton
					type="text"
					icon="right_arrow"
					iconRightSide
					to="/"
					disabled
				>
					次へ
				</LinkButton>
			</div>
		</div>
	);
}

export default Process;
