import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
	cardContainer: {
		marginTop: 15,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
		padding: 20,
		backgroundColor: "#fff",
		borderRadius: 8,
		borderWidth: 2,
		borderColor: "#ddd",
		elevation: 20
	},
	descriptionArea: {
		alignSelf: "auto",
		paddingLeft: 10,
		paddingRight: 10,
		justifyContent: "center"
	},
	textDescription: {
		fontSize: 15,
		fontFamily: "Roboto",
		fontWeight: "bold",
		paddingTop: 10,
		paddingBottom: 10
	}
});

export default Styles;
