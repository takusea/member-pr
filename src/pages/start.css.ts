import { style } from "@vanilla-extract/css";

export const styles = {
	container: style({
		width: "100vw",
		height: "100vh",
		backgroundColor: "#fff",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 32,
	}),
	inner: style({
		maxWidth: "800px",
		fontSize: "1.125rem",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		gap: 16,
		lineHeight: "1.5",
	}),
	header: style({
		maxWidth: 800,
		width: "100%",
		height: 64,
		position: "relative",
	}),
	title: style({
		fontSize: "2rem",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: "64px",
	}),
	home_button: style({
		position: "absolute",
		right: 0,
		top: 0,
		bottom: 0,
	}),
	footer: style({
		display: "flex",
		gap: 16,
	}),
};
