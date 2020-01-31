import React, { useEffect, useState } from "react";
import { View, FlatList, AsyncStorage } from "react-native";

import api from "../../services/api";
import Styles from "./Styles";
import Teachers from "../../components/Teachers";

export default function Professores() {
	const [teachers, setTeachers] = useState([]);

	async function loadTeachers() {
		const idTurma = await AsyncStorage.getItem("ID_TURMA");

		try {
			const response = await api.get(`/professores/${idTurma}`);

			if (!response.data || response.data.length == 0) {
				setTeachers([
					{
						ID_VINCULO: "1",
						NOME_PROFISSIONAL: "",
						DS_DISCIPLINA: ""
					}
				]);
			} else {
				setTeachers(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		loadTeachers();
	}, []);

	return (
		<View style={Styles.container}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={teachers}
				keyExtractor={item => item.ID_VINCULO}
				renderItem={({ item }) => <Teachers data={item} />}
			/>
		</View>
	);
}
