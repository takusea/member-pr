import { style } from "@vanilla-extract/css";

export const styles = {
	container: style({
		width: "100vw",
		height: "100vh",
		backgroundImage: "url(images/top_background.png)",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 8,
	}),
};
