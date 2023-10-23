import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Index from "./Index"

export default function App() {
	const Stack = createStackNavigator()
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name = "Index" options = {{headerShown: false}} component = {Index} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}