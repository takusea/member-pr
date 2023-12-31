import { styles } from "./Header.css.ts";

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
				<a href="/" className={styles.home}>
					ホーム
					<img src="icons/home.png" alt="" />
				</a>
			</div>
		</>
	);
}

export default Header;
