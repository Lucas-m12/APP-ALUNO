import React, { useState, useEffect } from "react";
import { View, FlatList, AsyncStorage } from "react-native";

import api from "../../services/api";
import Styles from "./Styles";
import Frequency from "../../components/Frequency";

export default function Frequencia({ navigation }) {
	const [dataFrequency, setDataFrequency] = useState([]);

	async function frequencyStudent() {
		const idAluno = await AsyncStorage.getItem("ID_ALUNO");
		const idTurma = await AsyncStorage.getItem("ID_TURMA");

		try {
			const response = await api.get(`/frequencia/${idAluno}/${idTurma}`);
			if (!response.data || response.data.length == 0) {
				setDataFrequency([
					{
						TOTAL_FALTAS: 0,
						ID_DISCIPLINA: "1",
						DS_DISCIPLINA: "",
						CH_TOTAL: 0
					}
				]);
			} else {
				setDataFrequency(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		frequencyStudent();
	}, []);

	return (
		<View style={Styles.container}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={dataFrequency}
				keyExtractor={item => item.ID_DISCIPLINA}
				renderItem={({ item }) => <Frequency data={item} />}
			/>
		</View>
	);
}
