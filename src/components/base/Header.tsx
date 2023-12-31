import { styles } from "./Header.css.ts";
import LinkButton from "./LinkButton.tsx";

type Props = {
	step: string;
	children: string;
};

function Header(props: Props) {
	return (
		<>
			<div className={styles.root}>
				<div className={styles.step}>
					<span>Step</span>
					<span className={styles.step_num}>{props.step}</span>
				</div>
				<h1 className={styles.title}>{props.children}</h1>
				<div className={styles.home}>
					<LinkButton type="text" iconRightSide icon="home" to="/">
						ホーム
					</LinkButton>
				</div>
			</div>
		</>
	);
}

export default Header;
