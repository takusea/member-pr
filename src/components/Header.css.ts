import { style } from "@vanilla-extract/css";

export const styles = {
	root: style({
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
	}),
	step: style({
		display: "flex",
		flexDirection: "column",
	}),
	step_num: style({
		fontSize: "2rem",
	}),
	home: style({
		fontSize: "2rem",
	}),
};
