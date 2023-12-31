import { style } from "@vanilla-extract/css";

export const styles = {
	root: style({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 16,
		transition: "opacity 0.4s",
		":hover": {
			opacity: 0.3,
		},
	}),
	step: style({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		color: "#fff",
		backgroundColor: "#9D9E9E",
		width: 100,
		height: 100,
		borderRadius: "50%",
		position: "relative",
		marginBottom: 8,
		":after": {
			content: "",
			display: "block",
			position: "absolute",
			width: 16,
			height: 16,
			bottom: -6,
			rotate: "45deg",
			backgroundColor: "#9D9E9E",
		},
	}),
	step_num: style({
		fontSize: "3rem",
	}),
	image: style({
		width: 160,
	}),
	text: style({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 4,
	}),
	text_main: style({
		fontWeight: "bold",
		fontSize: "2rem",
	}),
	text_sub: style({
		fontWeight: "bold",
		fontSize: "1.25rem",
	}),
	text_minutes: style({
		color: "#9D9E9E",
	}),
	text_minutes_icon: style({
		width: 24,
		marginRight: 8,
		verticalAlign: "text-bottom",
	}),
};
