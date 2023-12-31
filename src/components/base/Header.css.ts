import { style } from "@vanilla-extract/css";

export const styles = {
	root: style({
		display: "flex",
		width: "100%",
		alignItems: "center",
		gap: 8,
	}),
	step: style({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	}),
	title: style({
		fontSize: "2rem",
	}),
	step_num: style({
		fontSize: "4rem",
	}),
	home: style({
		marginLeft: "auto",
		fontWeight: "bold",
		display: "flex",
		gap: 8,
		alignItems: "center",
	}),
};
