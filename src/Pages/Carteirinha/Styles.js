import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ddd"
	},
	cardArea: {
		backgroundColor: "#FFF",
		flex: 1,
		margin: 7,
		borderRadius: 7,
		elevation: 20,
		paddingTop: 1
	},
	headerArea: {
		alignItems: "center",
		justifyContent: "center",
		padding: 20
	},
	imageArea: {
		paddingTop: 10
	},
	image: {
		borderRadius: 100,
		borderWidth: 3,
		borderColor: "#5DBCD2",
		width: 100,
		height: 100
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold",
		fontFamily: "Roboto",
		paddingBottom: 20,
		alignItems: "center",
		alignSelf: "center",
		justifyContent: "center"
	},
	descriptionArea: {
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		paddingBottom: 30
	},
	title: {
		color: "#808080",
		fontWeight: "bold",
		fontSize: 16
	},
	description: {
		color: "#808080",
		fontSize: 16
	},
	titleArea: {
		paddingTop: 20
	},
	infoArea: {
		paddingTop: 30,
		paddingBottom: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	info: {
		fontSize: 15,
		fontFamily: "Roboto",
		color: "#808080",
		fontWeight: "bold",
		textAlign: "center"
	}
});

export default Styles;
