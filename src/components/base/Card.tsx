import { ReactNode, useState } from "react";
import { styles } from "./Card.css.ts";
import Button from "./Button.tsx";

type Props = {
	children: ReactNode;
	onFinishButtonClick: () => void;
	finished: boolean;
};

function Card(props: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const increase = () => {
		setCurrentIndex(currentIndex + 1);
	};

	const decrease = () => {
		setCurrentIndex(currentIndex - 1);
	};

	return (
		<div className={styles.root}>
			<div className={styles.content}>
				<div
					className={styles.content_inner}
					style={{ transform: `translate3d(${-100 * currentIndex}%, 0, 0)` }}
				>
					{props.children}
				</div>
			</div>
			<div className={styles.footer}>
				{!props.finished ? (
					<>
						<Button
							onClick={decrease}
							iconPath="icons/left_arrow.png"
							disabled={currentIndex === 0}
						>
							戻る
						</Button>
						<Button
							onClick={increase}
							iconPath="icons/right_arrow.png"
							iconRightSide
							disabled={currentIndex === 3}
						>
							次へ
						</Button>
					</>
				) : (
					<Button type="text" onClick={props.onFinishButtonClick}>
						終了
					</Button>
				)}
			</div>
		</div>
	);
}

export default Card;
