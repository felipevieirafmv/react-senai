import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch, Button } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context";

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


function ButtonCustom(props){
    return(
        <Button title={props.title}>{props.children}</Button>
    )
}

export default function Cadastro(props)
{
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [notificacao, setNotificacao] = useState(false)
    const {utils, setUtils} = useContext(UtilsContext)

    function goToUsuario()
    {
        if(utils.dados)
        {
            setUtils({...utils, dados: [...utils.dados, {
                nome: nome,
                idade: idade,
                sexo: sexo,
                notificacao: notificacao}
            ]})
        }
        else
        {
            setUtils({...utils, dados: [{
                nome: nome,
                idade: idade,
                sexo: sexo,
                notificacao: notificacao}
            ]})
        }
            props.navigation.navigate("Usuarios")
    }

    return(
        <View style = {styles.viewClass}>
            <ButtonCustom title="teste cadastro">
                <Text></Text>
            </ButtonCustom>
            <View style = {styles.viewImg}>
                <Image
                    style = {styles.img}
                    source={require("../../cadImg.png")}
                />
            </View>
            <View style = {styles.viewForm}>
                <Text style = {styles.labelText}>Nome:</Text>
                <TextInput
                    style = {styles.input}
                    value = {nome}
                    onChangeText = {text => setNome(text)}
                />

                <View style = {styles.viewDoubleInput}>
                    <View style = {styles.viewOneDoubleInput}>
                        <Text style = {{fontFamily: "Comic Sans MS"}}>Idade:</Text>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {idade}
                            onChangeText = {text => setIdade(text)}
                        />
                    </View>
                    <View  style = {styles.viewOneDoubleInput}>
                        <Text style = {{fontFamily: "Comic Sans MS"}}>Sexo:</Text>
                        <TextInput
                            style = {styles.doubleInput}
                            value = {sexo}
                            onChangeText = {text => setSexo(text)}
                        />
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
                        onValueChange = {() => setNotificacao(!notificacao)}
                        value = {notificacao}
                        trackColor = {{false: "#757577", true: "#81b0ff"}}
                        thumbColor = {"#ffffff"}
                        activeThumbColor = {"#f4f3f4"}
                        style = {styles.styleSwitch}
                    />
                    <Text style = {styles.labelText}>{notificacao ? "Sim" : "Não"}</Text>
                </View>

            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.loginButton} onPress = {() => goToUsuario()}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => props.navigation.navigate("Login")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}