import { View, Text, Button, StyleSheet } from "react-native";

export function Login(props)
{
    return(
        <View style = {styles.viewClass}>
            <Text style = {styles.titleText}>Login</Text>
            
            <Button title = "Cadastro"
            onPress = {() => props.navigation.navigate("Cadastro")}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        paddingTop: "20%",
        paddingBottom: "20%",
        fontFamily: "Comic Sans MS",
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: "center",
    },
});