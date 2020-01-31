import React, { useState, useEffect } from "react";
import { View, FlatList, AsyncStorage } from "react-native";

import api from "../../services/api";
import TestResults from "../../components/TestResults";
import Styles from "./Styles";

export default function NotasProva({ navigation }) {
	const [testResults, setTestResults] = useState([]);

	async function loadTestResults() {
		const idAluno = await AsyncStorage.getItem("ID_ALUNO");
		const idTurma = await AsyncStorage.getItem("ID_TURMA");

		try {
			const response = await api.get(`notas/${idAluno}/${idTurma}`);

			if (!response.data || response.data.length == 0) {
				setTestResults([
					{
						ID_NOTA: "1",
						P8: "",
						P16: "",
						P24: "",
						P32: "",
						P33: "",
						P35: "",
						P36: "",
						DS_DISCIPLINA: "",
						ID_PERIODO: ""
					}
				]);
			} else {
				setTestResults(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		loadTestResults();
	}, []);

	return (
		<View style={Styles.container}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={testResults}
				keyExtractor={item => item.ID_NOTA}
				renderItem={({ item }) => <TestResults data={item} />}
			/>
		</View>
	);
}
