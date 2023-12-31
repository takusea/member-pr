import { useTimer } from "react-timer-hook";
import Button from "../base/Button";
import CardContent from "../base/CardContent";
import { styles } from "./CardContent.css.ts";

type Props = {
	onExpire: () => void;
};

const time = new Date();
time.setSeconds(time.getSeconds() + 2400); // 10 minutes timer

function CardContentV(props: Props) {
	const { seconds, minutes, isRunning, start } = useTimer({
		expiryTimestamp: time,
		autoStart: false,
		onExpire: () => props.onExpire,
	});

	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<div className={styles.desc}>
					<img className={styles.desc_icon} src="icons/timer.png" alt="" />
					40分程度
				</div>
				<h2 className={styles.headline}>準備ができたら開始してください</h2>
			</div>
			<div className={`${styles.section} ${styles.section_center}`}>
				<img className={styles.img} src="images/step1_4.png" alt="" />
			</div>
			<div className={`${styles.section} ${styles.section_center}`}>
				{isRunning ? (
					<span className={styles.timer}>
						{String(minutes).padStart(2, "0")}:
						{String(seconds).padStart(2, "0")}
					</span>
				) : (
					<Button onClick={start}>開始</Button>
				)}
			</div>
		</CardContent>
	);
}

export default CardContentV;
