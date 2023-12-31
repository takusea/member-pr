import { Link } from "react-router-dom";
import { styles } from "./ProcessButton.css.ts";

type Props = {
	subText: string;
	mainText: string;
	step: string;
	minutes: string;
};

function Button(props: Props) {
	return (
		<Link to={`/step_${props.step}`}>
			<div className={styles.root}>
				<div className={styles.step}>
					<span>Step</span>
					<span className={styles.step_num}>{props.step}</span>
				</div>
				<img
					className={styles.image}
					src={`images/step${props.step}.png`}
					alt=""
				/>
				<div className={styles.text}>
					<p className={styles.text_sub}>{props.subText}</p>
					<p className={styles.text_main}>{props.mainText}</p>
				</div>
				<p className={styles.text_minutes}>
					<img
						className={styles.text_minutes_icon}
						src="icons/timer.png"
						alt=""
					/>
					{props.minutes}分程度
				</p>
			</div>
		</Link>
	);
}

export default Button;
