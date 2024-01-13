import "../App.css";
import Header from "../components/base/Header";
import Card from "../components/base/Card";

import Step4_3 from "../components/card_contents/Step4_3";

function Step1() {
	return (
		<div className="container">
			<Header step="4">メンバーの魅力をPRする</Header>
			<Card finished={true}>
				<Step4_3 />
			</Card>
		</div>
	);
}

export default Step1;
