import LinkButton from "../components/base/LinkButton.tsx";
import { styles } from "./start.css.ts";

function Start() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>はじめに</h1>
				<div className={styles.home_button}>
					<LinkButton type="text" iconRightSide icon="home" to="/">
						ホーム
					</LinkButton>
				</div>
			</div>
			<div className={styles.inner}>
				<p>
					このワークショップは、メンバー間の相互理解を深め、成果に向けてチームのコミュニケーションを活性化させることができます。
				</p>
				<p>
					カードを使った対話や制作を通してメンバーの「人物像が明確化」されることで、新人はチームに馴染みやすくなるように、現メンバーはさらに強みを活かせるように、チーム全体の心理的安全性の向上させることを目的にしています。
				</p>
			</div>
			<img src="images/start.png" width={582} height={248} alt="" />
			<div className={styles.footer}>
				<LinkButton type="text" icon="left_arrow" to="/">
					戻る
				</LinkButton>
				<LinkButton type="text" icon="right_arrow" iconRightSide to="/process">
					次へ
				</LinkButton>
			</div>
		</div>
	);
}

export default Start;
