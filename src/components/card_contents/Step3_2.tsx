import CardContent from "../base/CardContent.tsx";
import { styles } from "./CardContent.css.ts";

function CardContexnxt() {
	return (
		<CardContent>
			<div className={`${styles.section} ${styles.section_center}`}>
				<p className={`${styles.desc}`}>
					代表者を1人決めて役割分担を行なってください。制限時間は40分ですので、
				</p>
				<p className={`${styles.desc}`}>
					なるべく時間内に制作できるようにチームで協力しましょう！
				</p>
			</div>
			<img className={styles.img} src="images/step3_2.png" alt="" />
		</CardContent>
	);
}

export default CardContexnxt;
