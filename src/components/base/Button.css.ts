import { style } from "@vanilla-extract/css";

export const styles = {
	root: style({
		fontWeight: "bold",
		paddingLeft: 32,
		paddingRight: 32,
		height: 64,
		borderRadius: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 8,
		transition: "background-color 0.2s",
		":disabled": {
			opacity: 0,
		},
	}),
	root_disabled: style({
		opacity: 0,
	}),
	root_reverse: style({
		flexDirection: "row-reverse",
	}),
	root_outline: style({
		borderWidth: 4,
		backgroundColor: "#fff",
		borderColor: "#000",
		":hover": {
			backgroundColor: "#eee",
		},
	}),
	root_text: style({
		textDecoration: "underline",
		":hover": {
			backgroundColor: "#0001",
		},
	}),
	root_fill: style({
		backgroundColor: "#1e1e1e",
		color: "#fff",
		":hover": {
			backgroundColor: "#333",
		},
	}),
};
