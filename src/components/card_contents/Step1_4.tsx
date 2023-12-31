import { useTimer } from "react-timer-hook";
import Button from "../base/Button";
import CardContent from "../base/CardContent";
import { styles } from "./CardContent.css.ts";

type Props = {
	onExpire: () => void;
};

const time = new Date();
time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

function CardContentV(props: Props) {
	const { seconds, minutes, hours, isRunning, start } = useTimer({
		expiryTimestamp: time,
		autoStart: false,
		onExpire: () => props.onExpire,
	});

	return (
		<CardContent>
			<div>40分程度</div>
			<h2 className={styles.headline}>準備ができたら開始してください</h2>
			{isRunning ? (
				<span>
					{hours}:{minutes}:{seconds}
				</span>
			) : (
				<Button onClick={start}>開始</Button>
			)}
		</CardContent>
	);
}

export default CardContentV;
