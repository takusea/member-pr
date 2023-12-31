import LinkButton from "../components/base/LinkButton.tsx";
import ProcessButton from "../components/base/ProcessButton.tsx";
import { styles } from "./process.css.ts";

function Process() {
	return (
		<div className={styles.container}>
			<h1>ワークショップの手順</h1>
			<div className={styles.process_list}>
				<ProcessButton
					subText="カードを使って"
					mainText="対話をする"
					step="1"
					minutes="40"
				/>
				<ProcessButton
					subText="カードを使って"
					mainText="対話をする"
					step="2"
					minutes="40"
				/>
				<ProcessButton
					subText="カードを使って"
					mainText="対話をする"
					step="3"
					minutes="40"
				/>
				<ProcessButton
					subText="カードを使って"
					mainText="対話をする"
					step="4"
					minutes="40"
				/>
			</div>
			<LinkButton to="/start">戻る</LinkButton>
		</div>
	);
}

export default Process;
