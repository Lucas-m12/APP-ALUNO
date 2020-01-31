import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Preload from "./components/Preload";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import NotasProva from "./Pages/NotasProva";
import Frequencia from "./Pages/Frequencia";
import Horarios from "./Pages/Horarios";
import Professores from "./Pages/Professores";
import Carteirinha from "./Pages/Carteirinha";

const Routes = createAppContainer(
	createSwitchNavigator({
		Login: createSwitchNavigator({
			Preload,
			Login
		}),
		App: createStackNavigator(
			{
				Main: {
					screen: Main,
					navigationOptions: {
						title: "SAGECAM ALUNO"
					}
				},
				Carteirinha: {
					screen: Carteirinha,
					navigationOptions: {
						title: "CARTEIRINHA DO ESTUDANTE"
					}
				},
				NotasProva: {
					screen: NotasProva,
					navigationOptions: {
						title: "NOTAS DE PROVAS"
					}
				},
				Frequencia: {
					screen: Frequencia,
					navigationOptions: {
						title: "FREQUÊNCIA"
					}
				},
				Horarios: {
					screen: Horarios,
					navigationOptions: {
						title: "QUADRO DE HORÁRIOS"
					}
				},
				Professores: {
					screen: Professores,
					navigationOptions: {
						title: "PROFESSORES"
					}
				}
			},
			{
				defaultNavigationOptions: {
					headerTintColor: "#FFF",
					headerBackTitleVisible: false,
					headerStyle: {
						backgroundColor: "#5DBCD2"
					}
				}
			}
		)
	})
);

export default Routes;
