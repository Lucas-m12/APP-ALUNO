import React from "react";
import { View, Text } from "react-native";

import Styles from "./Styles";
import upperCaseInitial from "../../utils/upperCaseInitial";

export default function Teachers(props) {
	return (
		<View style={Styles.cardContainer}>
			<View style={Styles.descriptionArea}>
				<Text style={Styles.textDescription}>
					Professor (a):{" "}
					{upperCaseInitial(props.data.NOME_PROFISSIONAL)}
				</Text>

				<Text style={Styles.textDescription}>
					Disciplina: {upperCaseInitial(props.data.DS_DISCIPLINA)}
				</Text>
			</View>
		</View>
	);
}
