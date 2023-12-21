import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

function Card(props: Props) {
	return (
		<>
			<div className="card">{props.children}</div>
		</>
	);
}

export default Card;
