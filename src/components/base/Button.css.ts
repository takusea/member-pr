import { style } from "@vanilla-extract/css";

export const styles = {
	root: style({
		paddingLeft: 32,
		paddingRight: 32,
		height: 64,
		borderRadius: 10,
		backgroundColor: "#fff",
		borderWidth: 4,
		borderColor: "#000",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		":disabled": {
			opacity: 0,
		},
	}),
	root_reverse: style({
		flexDirection: "row-reverse",
	}),
};
