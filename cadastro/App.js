import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {Login} from "./src/pages/Login" 
import Cadastro from "./src/pages/Cadastro"
import Usuarios from "./src/pages/Usuarios"
import {UtilsContext} from "./src/pages/config/context"
import { useState } from "react"

export default function App() {
	const [utils, setUtils] = useState({})
	const Stack = createStackNavigator()
	return(
		<NavigationContainer>
			<UtilsContext.Provider value = {{utils, setUtils}}>
				<Stack.Navigator>
					<Stack.Screen name = "Cadastro" options = {{headerShown: false}} component = {Cadastro} />
					<Stack.Screen name = "Usuarios" options = {{headerShown: false}} component = {Usuarios} />
					<Stack.Screen name = "Login" options = {{headerShown: false}} component = {Login} />
				</Stack.Navigator>
			</UtilsContext.Provider>
		</NavigationContainer>
	);
}