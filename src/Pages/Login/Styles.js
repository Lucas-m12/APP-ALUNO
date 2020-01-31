import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#5DBCD2",
		height: "100%"
	},
	viewLogo: {
		alignItems: "center",
		justifyContent: "center",
		// marginBottom: 20,
		marginTop: 30
	},
	viewInputs: {
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: 20
	},
	input: {
		backgroundColor: "#FFF",
		padding: 10,
		marginTop: 20,
		width: "90%",
		height: 60,
		borderRadius: 7,
		fontSize: 20,
		color: "#000"
	},
	button: {
		marginTop: 20,
		backgroundColor: "#4169E1",
		width: "90%",
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 7
	},
	textButton: {
		fontSize: 20,
		color: "#FFF"
	}
});

export default Styles;
