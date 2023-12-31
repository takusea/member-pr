import "../App.css";
import Header from "../components/base/Header";
import Card from "../components/base/Card";

import Step2_1 from "../components/card_contents/Step2_1";
import Step2_2 from "../components/card_contents/Step2_2";
import Step2_3 from "../components/card_contents/Step2_3";
import Step2_4 from "../components/card_contents/Step2_4";
import Step2_5 from "../components/card_contents/Step2_5";
import { useState } from "react";

function Step1() {
	const [finished, setFinished] = useState(false);

	return (
		<div className="container">
			<Header step="2">自身の強みをみつける</Header>
			<Card finished={finished} onFinishButtonClick={() => {}}>
				<Step2_1 />
				<Step2_2 />
				<Step2_3 />
				<Step2_4 />
				<Step2_5 onExpire={() => setFinished(true)} />
			</Card>
		</div>
	);
}

export default Step1;
