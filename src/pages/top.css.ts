import { style } from "@vanilla-extract/css";

export const styles = {
	container: style({
		width: "100vw",
		height: "100vh",
		backgroundImage: "url(../images/top_background.png)",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 8,
	}),
	text: style({
		fontSize: "1.125rem",
		lineHeight: "1.5",
		textAlign: "center",
		marginBottom: 48,
	}),
	button_container: style({
		display: "flex",
		flexDirection: "column",
		gap: 16,
		width: 240,
		marginBottom: 8,
	}),
};
