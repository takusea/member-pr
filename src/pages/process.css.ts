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
	process_list: style({
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 64,
	}),
};
