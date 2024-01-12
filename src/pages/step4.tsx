import "../App.css";
import Header from "../components/base/Header";
import Card from "../components/base/Card";

import Step4_1 from "../components/card_contents/Step4_1";
import Step4_2 from "../components/card_contents/Step4_2";
import { useState } from "react";

function Step1() {
	const [finished, setFinished] = useState(false);

	return (
		<div className="container">
			<Header step="4">メンバーの魅力をPRする</Header>
			<Card finished={finished} onFinishButtonClick={() => {}}>
				<Step4_1 />
				<Step4_2 onStart={() => setFinished(true)} />
			</Card>
		</div>
	);
}

export default Step1;
