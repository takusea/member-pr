import { Children, ReactNode, useState } from "react";
import { styles } from "./Card.css.ts";
import Button from "./Button.tsx";
import LinkButton from "./LinkButton.tsx";

type Props = {
	children: ReactNode;
	finished: boolean;
	finishLink?: string;
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
							type="text"
							icon="left_arrow"
							disabled={currentIndex === 0}
						>
							戻る
						</Button>
						<Button
							onClick={increase}
							type="text"
							icon="right_arrow"
							iconRightSide
							disabled={currentIndex === Children.count(props.children) - 1}
						>
							次へ
						</Button>
					</>
				) : props.finishLink ? (
					<LinkButton type="text" to={props.finishLink}>
						終了
					</LinkButton>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Card;
