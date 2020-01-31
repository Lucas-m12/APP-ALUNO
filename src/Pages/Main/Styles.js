import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#5DBCD2"
	},
	containerMenu: {
		flex: 1,
		width: "100%",
		paddingLeft: 10,
		paddingRight: 10
	},
	lineMenu: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 20,
		paddingBottom: 20,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: "rgba(255, 255, 255, 0.7)"
	},
	description: {
		fontSize: 24,
		paddingLeft: 10,
		color: "#fff",
		fontWeight: "bold"
	},
	viewImage: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
		marginBottom: 30
	},
	imageProfile: {
		width: 150,
		height: 150,
		borderWidth: 4,
		borderColor: "#FFF",
		borderRadius: 100
	}
});

export default Styles;
