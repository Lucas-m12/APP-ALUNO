import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	AsyncStorage,
	Image
} from "react-native";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/MaterialIcons";

import Styles from "./Styles";
import { black, white } from "ansi-colors";

export default function Main({ navigation }) {
	const [studentName, setStudentName] = useState("");
	const [studentPhoto, setStudentPhoto] = useState(
		require("../../../assets/img/perfil.jpg")
	);

	async function photoProfileStudent() {
		const photo = await AsyncStorage.getItem("URL_FOTO");
		if (!photo) {
			setStudentPhoto(require("../../../assets/img/perfil.jpg"));
		} else {
			setStudentPhoto(`{uri: ${photo}}`);
		}
	}

	async function dataStudentHeader() {
		const name = await AsyncStorage.getItem("NOME_ALUNO");
		setStudentName(name);
	}

	async function signOut() {
		await AsyncStorage.clear();
		navigation.navigate("Login");
	}

	useEffect(() => {
		dataStudentHeader();
		photoProfileStudent();
	}, []);

	return (
		<View style={Styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header studentName={studentName} />

				<View style={Styles.containerMenu}>
					<View style={Styles.viewImage}>
						<Image
							source={studentPhoto}
							style={Styles.imageProfile}
						/>
					</View>
					<TouchableOpacity
						onPress={() => navigation.navigate("Carteirinha")}
					>
						<View style={Styles.lineMenu}>
							<Icon name="account-box" size={20} color="#FFF" />

							<Text style={Styles.description}>CARTEIRINHA</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={Styles.button}
						onPress={() => navigation.navigate("NotasProva")}
					>
						<View style={Styles.lineMenu}>
							<Icon name="library-books" size={20} color="#FFF" />

							<Text style={Styles.description}>
								NOTAS DE PROVAS
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate("Frequencia")}
					>
						<View style={Styles.lineMenu}>
							<Icon name="note" size={20} color="#FFF" />

							<Text style={Styles.description}>FREQUÊNCIA</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate("Professores")}
					>
						<View style={Styles.lineMenu}>
							<Icon name="people" size={20} color="#FFF" />

							<Text style={Styles.description}>PROFESSORES</Text>
						</View>
					</TouchableOpacity>

					{/* <TouchableOpacity
						onPress={() => navigation.navigate("Horarios")}
					>
						<View style={Styles.lineMenu}>
							<Icon name="timer" size={20} color="#FFF" />

							<Text style={Styles.description}>HORÁRIOS</Text>
						</View>
					</TouchableOpacity> */}

					<TouchableOpacity onPress={signOut}>
						<View style={Styles.lineMenu}>
							<Icon name="exit-to-app" size={20} color="#FFF" />

							<Text style={Styles.description}>SAIR</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}
