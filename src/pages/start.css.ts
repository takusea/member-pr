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
		width: "800px",
		fontSize: "1.125rem",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		gap: 16,
	}),
	footer: style({
		display: "flex",
		gap: 16,
	}),
	title: style({
		fontSize: "2rem",
		fontWeight: "bold",
	}),
};
