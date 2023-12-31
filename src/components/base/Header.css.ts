import { style } from "@vanilla-extract/css";

export const styles = {
	root: style({
		display: "flex",
		width: "100%",
		alignItems: "center",
		gap: 16,
	}),
	title: style({
		fontSize: "2rem",
		fontWeight: "bold",
	}),
	step: style({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		fontWeight: "bold",
	}),
	step_num: style({
		fontSize: "3rem",
	}),
	home: style({
		marginLeft: "auto",
		fontWeight: "bold",
		display: "flex",
		gap: 8,
		alignItems: "center",
	}),
};
