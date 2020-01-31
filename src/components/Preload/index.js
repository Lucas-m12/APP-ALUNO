import React, { useEffect, useState } from "react";
import { AsyncStorage, View } from "react-native";

// import { Container } from './styles';

export default function Preload({ navigation }) {
	const [idStudent, setIdStudent] = useState(null);

	async function verifyAuth() {
		await AsyncStorage.getItem("ID_ALUNO").then(idStudent => {
			if (!idStudent) {
				navigation.navigate("Login");
			} else {
				navigation.navigate("Main");
			}
		});
	}

	useEffect(() => {
		verifyAuth();
	}, []);

	return <View></View>;
}
