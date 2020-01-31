import React from "react";
import { View, Text } from "react-native";

import Styles from "./Styles";

function Header(props) {
	let name = props.studentName.split(" ");

	return (
		<View style={Styles.container}>
			<View>
				<View />
				<Text style={Styles.userName}>{`${name[0]} ${name[1]}`}</Text>
			</View>
		</View>
	);
}

export default Header;
