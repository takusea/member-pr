import { useTimer } from "react-timer-hook";
import Button from "../base/Button.tsx";
import CardContent from "../base/CardContent.tsx";
import { styles } from "./CardContent.css.ts";
import { useState } from "react";
import Icon from "../base/Icon.tsx";

type Props = {
	onStart: () => void;
};

const timeLimit = 900;

function CardContentV(props: Props) {
	const [isStarted, setStarted] = useState(false);

	const { seconds, minutes, restart } = useTimer({
		expiryTimestamp: new Date(),
		autoStart: false,
	});

	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<div className={styles.desc}>
					<span className={styles.desc_icon}>
						<Icon name="timer" />
					</span>
					{timeLimit / 60}分程度
				</div>
				<h2 className={styles.headline}>準備ができたら開始してください</h2>
			</div>
			<div className={`${styles.section} ${styles.section_center}`}>
				<img
					className={styles.img}
					width={261}
					height={190}
					src="images/step2.png"
					alt=""
				/>
			</div>
			<div className={`${styles.section} ${styles.section_center}`}>
				{isStarted ? (
					<span className={styles.timer}>
						{String(minutes).padStart(2, "0")}:
						{String(seconds).padStart(2, "0")}
					</span>
				) : (
					<Button
						type="fill"
						onClick={() => {
							const _time = new Date();
							_time.setSeconds(_time.getSeconds() + timeLimit);
							restart(_time);
							setStarted(true);
							props.onStart();
						}}
					>
						開始
					</Button>
				)}
			</div>
		</CardContent>
	);
}

export default CardContentV;
