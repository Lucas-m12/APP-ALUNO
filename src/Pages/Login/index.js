import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Image,
	AsyncStorage,
	Animated,
	Keyboard,
	Alert
} from "react-native";

import api from "../../services/api";
import Styles from "./Styles";

export default function Login({ navigation }) {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [offset] = useState(new Animated.ValueXY({ x: 10, y: 96 }));
	const [opacity] = useState(new Animated.Value(0));
	const [logo] = useState(new Animated.ValueXY({ x: 160, y: 200 }));

	useEffect(() => {
		KeyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			KeyboardDidShow
		);
		KeyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			KeyboardDidHide
		);

		Animated.parallel([
			Animated.spring(offset.y, {
				toValue: 0,
				speed: 2,
				bounciness: 20
			}),
			Animated.timing(opacity, {
				toValue: 1,
				duration: 200
			})
		]).start();
	}, []);

	function KeyboardDidShow() {
		Animated.parallel([
			Animated.timing(logo.x, {
				toValue: 55,
				duration: 100
			}),
			Animated.timing(logo.y, {
				toValue: 65,
				duration: 100
			})
		]).start();
	}

	function KeyboardDidHide() {
		Animated.parallel([
			Animated.timing(logo.x, {
				toValue: 160,
				duration: 100
			}),
			Animated.timing(logo.y, {
				toValue: 200,
				duration: 100
			})
		]).start();
	}

	async function studentLogin() {
		if (login != "") {
			if (password != "") {
				const data = await api.get(`/app/2701902/${login}/${password}`);
				if (data.data.Erro) {
					Alert.alert("Erro", data.data.Mensagem);
				} else {
					saveData(data.data);
					navigation.navigate("Main");
				}
			} else {
				Alert.alert("Erro", "Preencha o campo de senha");
			}
		} else {
			Alert.alert("Erro", "Preencha o campo de login");
		}
	}

	async function saveData(data) {
		await AsyncStorage.multiSet(Object.entries(data));
	}

	return (
		<KeyboardAvoidingView
			style={Styles.container}
			behavior="padding"
			enabled
		>
			<View style={Styles.viewLogo}>
				<Animated.Image
					source={require("../../../assets/img/icon.png")}
					style={{
						width: logo.x,
						height: logo.y
					}}
				/>
			</View>
			<Animated.View
				style={[
					Styles.viewInputs,
					{
						opacity: opacity,
						transform: [
							{
								translateY: offset.y
							}
						]
					}
				]}
			>
				<TextInput
					style={Styles.input}
					autoCompleteType="username"
					autoCorrect={false}
					placeholder="Login"
					autoCapitalize="none"
					onChangeText={setLogin}
					value={login}
				/>
				<TextInput
					style={Styles.input}
					autoCompleteType="password"
					autoCorrect={false}
					placeholder="Senha"
					secureTextEntry={true}
					autoCapitalize="none"
					onChangeText={setPassword}
					value={password}
				/>
				<TouchableOpacity style={Styles.button} onPress={studentLogin}>
					<Text style={Styles.textButton}>Entrar</Text>
				</TouchableOpacity>
			</Animated.View>
		</KeyboardAvoidingView>
	);
}
