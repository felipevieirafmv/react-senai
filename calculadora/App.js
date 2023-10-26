import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { UtilsContext } from "./scr/pages/config/context"
import Index from "./scr/pages"
import { useState } from "react"

export default function App() {
	const [utils, setUtils] = useState({})
	const Stack = createStackNavigator()
	return(
		<NavigationContainer>
			<UtilsContext.Provider value = {{utils, setUtils}}>
				<Stack.Navigator>
					<Stack.Screen name = "Index" options = {{headerShown: false}} component = {Index} />
				</Stack.Navigator>
			</UtilsContext.Provider>
		</NavigationContainer>
	);
}