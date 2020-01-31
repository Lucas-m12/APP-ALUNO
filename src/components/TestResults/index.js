import React from "react";
import { View, Text } from "react-native";

import upperCaseInitial from "../../utils/upperCaseInitial";
import Styles from "./Styles";

export default function TestResults(props) {
	if (parseInt(props.data.ID_PERIODO) === 1) {
		return (
			<View style={Styles.cardContainer}>
				<Text style={Styles.textSubject}>
					Disciplina: {upperCaseInitial(props.data.DS_DISCIPLINA)}
				</Text>
				<Text style={Styles.textNote}>1ºBIM: {props.data.P8}</Text>
				<Text style={Styles.textNote}>2ºBIM: {props.data.P16}</Text>
				<Text style={Styles.textNote}>3ºBIM: {props.data.P24}</Text>
				<Text style={Styles.textNote}>4ºBIM: {props.data.P32}</Text>
				<Text style={Styles.textNote}>
					MÉDIA:{" "}
					{props.data.P32 != "" ? props.data.P35 : props.data.P36}
				</Text>
			</View>
		);
	} else {
		return (
			<View style={Styles.cardContainer}>
				<Text style={Styles.textSubject}>
					Disciplina: {upperCaseInitial(props.data.DS_DISCIPLINA)}
				</Text>
				<Text style={Styles.textNote}>1ºSEM: {props.data.P8}</Text>
				<Text style={Styles.textNote}>2ºSEM: {props.data.P16}</Text>
				<Text style={Styles.textNote}>
					MÉDIA:{" "}
					{props.data.P32 != "" ? props.data.P35 : props.data.P36}
				</Text>
			</View>
		);
	}
}
