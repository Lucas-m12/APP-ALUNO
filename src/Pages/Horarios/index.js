import React from "react";
import { View, Text } from "react-native";

import Styles from "./Styles";

export default function Horarios() {
	return (
		<View style={Styles.container}>
			<View style={Styles.cardView}>
				<View style={Styles.cardHeader}>
					<Text style={Styles.day}>SEGUNDA-FEIRA</Text>
				</View>
			</View>
		</View>
	);
}
