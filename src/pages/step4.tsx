import "../App.css";
import Header from "../components/base/Header";
import Card from "../components/base/Card";

import Step1_1 from "../components/card_contents/Step1_1";
import Step1_2 from "../components/card_contents/Step1_2";
import Step1_3 from "../components/card_contents/Step1_3";
import Step1_4 from "../components/card_contents/Step1_4";
import { useState } from "react";

function Step1() {
	const [finished, setFinished] = useState(false);

	return (
		<div className="container">
			<Header step="4">メンバーの魅力をPRする</Header>
			<Card finished={finished} onFinishButtonClick={() => {}}>
				<Step1_1 />
				<Step1_2 />
				<Step1_3 />
				<Step1_4 onExpire={() => setFinished(true)} />
			</Card>
		</div>
	);
}

export default Step1;
