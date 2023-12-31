import { style } from "@vanilla-extract/css";

export const styles = {
	headline: style({
		fontWeight: 700,
		fontSize: "2rem",
		marginBottom: "1rem",
	}),
	desc: style({
		fontSize: "1rem",
		lineHeight: 1.75,
		marginBottom: "1rem",
	}),
	subheadline: style({
		fontSize: "1rem",
		backgroundColor: "#000",
		display: "inline-flex",
		alignItems: "center",
		height: 32,
		color: "white",
		paddingLeft: 16,
		paddingRight: 16,
		marginBottom: "1rem",
	}),
};
