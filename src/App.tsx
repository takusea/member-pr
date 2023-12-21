import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
	return (
		<>
			<div>
				<Header step="1">a</Header>
				<Card>
					<p className="desc">
						2種類のカードを使って才能をみつけるための対話を行ないます！
					</p>
					<p className="desc">
						1人ずつ答える役と深ぼる役になり、対話の順番を回していきましょう。
					</p>
				</Card>
			</div>
		</>
	);
}

export default App;
