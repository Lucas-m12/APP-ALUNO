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
	textSubject: {
		fontSize: 20,
		fontFamily: "Roboto",
		fontWeight: "bold",
		paddingBottom: 10
	},
	textTotalFrequency: {
		fontSize: 20,
		fontFamily: "Roboto",
		fontWeight: "bold",
		paddingBottom: 5,
		color: "#808080"
	},
	textPercentageFrequency: {
		fontSize: 20,
		fontFamily: "Roboto",
		fontWeight: "bold",
		paddingBottom: 5,
		color: "#808080"
	}
});

export default Styles;
