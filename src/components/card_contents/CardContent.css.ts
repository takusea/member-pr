import { style } from "@vanilla-extract/css";

export const styles = {
	section: style({
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		marginBottom: "2rem",
	}),
	section_center: style({
		alignItems: "center",
		textAlign: "center",
	}),
	headline: style({
		fontWeight: 700,
		fontSize: "2rem",
		marginBottom: "1rem",
	}),
	desc: style({
		fontSize: "1.125rem",
		lineHeight: 1.75,
		marginBottom: "1rem",
	}),
	desc_icon: style({
		marginRight: 8,
	}),
	img: style({
		display: "block",
		margin: "auto",
		maxWidth: "100%",
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
	column_2: style({
		display: "flex",
		gap: 32,
	}),
	timer: style({
		fontSize: "3rem",
		height: 64,
	}),
};
