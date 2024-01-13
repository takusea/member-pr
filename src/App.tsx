import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "./pages/step1";
import Step2 from "./pages/step2";
import Step3 from "./pages/step3";
import Step4 from "./pages/step4";
import Process from "./pages/process";
import Product from "./pages/product";
import Start from "./pages/start";
import Top from "./pages/top";
import Finish from "./pages/finish";

function App() {
	return (
		<BrowserRouter basename="/member-pr">
			<Routes>
				<Route index element={<Top />} />
				<Route path="start" element={<Start />} />
				<Route path="process" element={<Process />} />
				<Route path="product" element={<Product />} />
				<Route path="step_1" element={<Step1 />} />
				<Route path="step_2" element={<Step2 />} />
				<Route path="step_3" element={<Step3 />} />
				<Route path="step_4" element={<Step4 />} />
				<Route path="finish" element={<Finish />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
