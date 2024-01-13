import { style } from "@vanilla-extract/css";

export const styles = {
	root: style({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		borderRight: "2px solid #000",
		borderBottom: "2px solid #000",
		gap: 8,
	}),
	image: style({
		width: 160,
	}),
	date: style({
		fontWeight: "bold",
	}),
};
