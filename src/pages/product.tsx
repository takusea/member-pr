import { styles } from "./product.css.ts";

function Step1() {
	return (
		<div className={styles.container}>
			<ul className={styles.tab}>
				<li className={styles.tab_item}>〇〇〇〇〇〇</li>
				<li className={styles.tab_item}>〇〇〇〇〇〇</li>
				<li className={styles.tab_item}>〇〇〇〇</li>
				<li className={styles.tab_item}>〇〇〇〇〇〇〇〇</li>
			</ul>
			<div className={styles.card}>
				<div>
					<img src="images/product_ex.png" alt="" />
					<p>制作日 2023/11/23</p>
				</div>
			</div>
		</div>
	);
}

export default Step1;
