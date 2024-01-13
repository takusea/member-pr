import LinkButton from "../components/base/LinkButton.tsx";
import Product from "../components/base/Product.tsx";
import { styles } from "./product.css.ts";

function Step1() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<ul className={styles.tab}>
					<li className={styles.tab_item} style={{ zIndex: "3" }}>
						すべて
					</li>
					<li className={styles.tab_item} style={{ zIndex: "2" }}>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</li>
					<li className={styles.tab_item} style={{ zIndex: "1" }}>
						&nbsp;&nbsp;&nbsp;&nbsp;
					</li>
					<li className={styles.tab_item} style={{ zIndex: "0" }}>
						&nbsp;&nbsp;&nbsp;&nbsp;
					</li>
				</ul>
				<div className={styles.home_button}>
					<LinkButton type="text" iconRightSide icon="home" to="/">
						ホーム
					</LinkButton>
				</div>
			</div>
			<div className={styles.card}>
				<Product createdDate="2023/12/13" imagePath="images/product_1.png" />
				<Product createdDate="2023/12/13" imagePath="images/product_2.png" />
				<Product createdDate="2023/12/13" imagePath="images/product_3.png" />
				<Product createdDate="2023/12/18" imagePath="images/product_4.png" />
				<Product createdDate="2023/12/18" imagePath="images/product_5.png" />
				<Product createdDate="2023/12/18" imagePath="images/product_6.png" />
			</div>
		</div>
	);
}

export default Step1;
