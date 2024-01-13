import "../App.css";
import Header from "../components/base/Header";
import Card from "../components/base/Card";

import Step3_1 from "../components/card_contents/Step3_1";
import Step3_2 from "../components/card_contents/Step3_2";
import Step3_3 from "../components/card_contents/Step3_3";
import { useState } from "react";

function Step1() {
	const [finished, setFinished] = useState(false);

	return (
		<div className="container">
			<Header step="3">お題に合わせて制作する</Header>
			<Card finished={finished} finishLink="/process">
				<Step3_1 />
				<Step3_2 />
				<Step3_3 onStart={() => setFinished(true)} />
			</Card>
		</div>
	);
}

export default Step1;
