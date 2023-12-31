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
		":disabled": {
			opacity: 0,
		},
	}),
	root_reverse: style({
		flexDirection: "row-reverse",
	}),
	root_outline: style({
		borderWidth: 4,
		backgroundColor: "#fff",
		borderColor: "#000",
	}),
	root_text: style({
		textDecoration: "underline",
	}),
	root_fill: style({
		backgroundColor: "#000",
		color: "#fff",
	}),
};
