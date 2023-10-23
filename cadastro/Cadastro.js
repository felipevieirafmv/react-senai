import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    viewClass: {
        display: "flex",
        backgroundColor: "#E0E0E0",
        height: "100%",
    },
    labelText: {
        fontFamily: "Comic Sans MS",
        paddingLeft: "7%",
    },
    input: {
        backgroundColor: "white",
        height: 25,
        marginLeft: "7%",
        marginRight: "7%",
        marginBottom: "5%",
        borderRadius: 5
    },
    viewForm: {
        display: "flex",
        justifyContent: "flex-start",
    },
    viewButton: {
        display: "flex",
        justifyContent: "flex-end",
    },
    loginButton: {
        backgroundColor: "white",
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "10%",
        borderRadius: 5
    },
    cadastroButton: {
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "10%",
        marginBottom: "10px"
    },
    buttonText: {
        fontFamily: "Comic Sans MS",
        textAlign: "center"
    },
    viewImg: {
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        paddingTop: "5%"
    },
    img: {
        width: 150,
        height: 150,
    },
    viewDoubleInput: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: "7%"
    },
    viewOneDoubleInput: {
        marginBottom: "5%",
        width: "45%"
    },
    doubleInput: {
        backgroundColor: "white",
        height: 25,
        borderRadius: 5
    },
    viewSwitch: {
        paddingLeft: "7%",
        paddingBottom: "5%",
        display: "flex",
        flexDirection: 'row',
    }
});

export default function Cadastro(props)
{
    const [inicio, setInicio] = useState(false)
    return(
        <View style = {styles.viewClass}>
            <View style = {styles.viewImg}>
                <Image
                    style = {styles.img}
                    source={require("./cadImg.png")}
                />
            </View>
            <View style = {styles.viewForm}>
                <Text style = {styles.labelText}>Nome:</Text>
                <TextInput style = {styles.input} />

                <View style = {styles.viewDoubleInput}>
                    <View style = {styles.viewOneDoubleInput}>
                        <Text style = {{fontFamily: "Comic Sans MS"}}>Idade:</Text>
                        <TextInput style = {styles.doubleInput} />
                    </View>
                    <View  style = {styles.viewOneDoubleInput}>
                        <Text style = {{fontFamily: "Comic Sans MS"}}>Sexo:</Text>
                        <TextInput style = {styles.doubleInput} />
                    </View>
                </View>

                <Text style = {styles.labelText}>E-mail:</Text>
                <TextInput style = {styles.input}/>
                <Text style = {styles.labelText}>Senha:</Text>
                <TextInput style = {styles.input}/>
                <Text style = {styles.labelText}>Confirmar senha:</Text>
                <TextInput style = {styles.input}/>
                <Text style = {styles.labelText}>Deseja receber notificações:</Text>
                <View style = {styles.viewSwitch}>
                    <Switch
                        onValueChange = {() => setInicio(!inicio)}
                        value = {inicio}
                        trackColor = {{false: "#757577", true: "#81b0ff"}}
                        thumbColor = {"#ffffff"}
                        activeThumbColor = {"#f4f3f4"}
                        style = {styles.styleSwitch}
                    />
                    <Text style = {styles.labelText}>{inicio ? "Sim" : "Não"}</Text>
                </View>

            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.loginButton} onPress = {() => props.navigation.navigate("Login")}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => props.navigation.navigate("Login")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}