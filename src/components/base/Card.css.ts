import { style } from "@vanilla-extract/css";

export const styles = {
	root: style({
		padding: 80,
		borderRadius: 10,
		backgroundColor: "#fff",
		borderWidth: 4,
		borderColor: "#000",
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch",
		gap: 40,
	}),
	content: style({
		overflow: "hidden",
	}),
	content_inner: style({
		display: "flex",
		zIndex: 2,
		transition: "transform 0.4s",
		transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
	}),
	footer: style({
		display: "flex",
		justifyContent: "center",
		gap: 8,
	}),
};
