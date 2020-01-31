import React from "react";
import { View, Text } from "react-native";

import Styles from "./Styles";
import upperCaseInitial from "../../utils/upperCaseInitial";

export default function Frequency(props) {
	var calcFaults =
		props.data.TOTAL_FALTAS === 0
			? 0.0
			: 100 -
			  ((parseFloat(props.data.CH_TOTAL) -
					parseFloat(props.data.TOTAL_FALTAS)) /
					parseFloat(props.data.CH_TOTAL)) *
					100;

	return (
		<View style={Styles.cardContainer}>
			<Text style={Styles.textSubject}>
				Disciplina: {upperCaseInitial(props.data.DS_DISCIPLINA)}
			</Text>
			<View style={Styles.viewFrequecy}>
				<Text style={Styles.textTotalFrequency}>
					Total de Faltas: <Text>{props.data.TOTAL_FALTAS}</Text>
				</Text>
				<Text style={Styles.textPercentageFrequency}>
					Percentual de Faltas: <Text>{calcFaults.toFixed(2)}%</Text>
				</Text>
			</View>
		</View>
	);
}
