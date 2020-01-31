import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, AsyncStorage } from "react-native";

import api from "../../services/api";
import Styles from "./Styles";
import dateFormatBR from "../../utils/dateFormatBR";

export default function Carteirinha() {
	const [dataStudent, setDataStudent] = useState([
		{
			NOME_ALUNO: "",
			DT_NASC_ALUNO: "",
			INEP_ALUNO: "",
			CPF_ALUNO: "",
			DATA_FIM: "",
			DS_SUB_ETAPA: "",
			NOME_ESCOLA: ""
		}
	]);

	async function loadDataStudent() {
		const idAluno = await AsyncStorage.getItem("ID_ALUNO");

		try {
			const response = await api.get(`/carteirinha/${idAluno}`);
			if (!response.data || response.data.length == 0) {
				setDataStudent([
					{
						NOME_ALUNO: "",
						DT_NASC_ALUNO: "",
						INEP_ALUNO: "",
						CPF_ALUNO: "",
						DATA_FIM: "",
						DS_SUB_ETAPA: "",
						NOME_ESCOLA: ""
					}
				]);
			} else {
				setDataStudent(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		loadDataStudent();
	}, []);

	return (
		<View style={Styles.container}>
			<ScrollView
				style={Styles.cardArea}
				showsVerticalScrollIndicator={false}
			>
				<View style={Styles.headerArea}>
					<Text style={Styles.headerText}>
						{dataStudent[0].NOME_ESCOLA}
					</Text>
					<View style={Styles.imageArea}>
						<Image
							source={require("../../../assets/img/perfil.jpg")}
							style={Styles.image}
						/>
					</View>
				</View>

				<View style={Styles.descriptionArea}>
					<View style={Styles.nameArea}>
						<Text style={Styles.title}>Nome</Text>
						<Text style={Styles.description}>
							{dataStudent[0].NOME_ALUNO}
						</Text>
					</View>

					<View style={Styles.titleArea}>
						<Text style={Styles.title}>CPF</Text>
						<Text style={Styles.description}>
							{dataStudent[0].CPF_ALUNO}
						</Text>
					</View>

					<View style={Styles.titleArea}>
						<Text style={Styles.title}>Data de Nascimento</Text>
						<Text style={Styles.description}>
							{dataStudent[0].DT_NASC_ALUNO}
						</Text>
					</View>

					<View style={Styles.titleArea}>
						<Text style={Styles.title}>Série</Text>
						<Text style={Styles.description}>
							{dataStudent[0].DS_SUB_ETAPA}
						</Text>
					</View>

					<View style={Styles.titleArea}>
						<Text style={Styles.title}>Validade</Text>
						<Text style={Styles.description}>
							{dateFormatBR(dataStudent[0].DATA_FIM)}
						</Text>
					</View>

					<View style={Styles.infoArea}>
						<Text style={Styles.info}>
							Válida mediante apresentação de documento de
							identidade com foto
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
