import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context";

const styles = StyleSheet.create({
    viewClass: {
        backgroundColor: "#E0E0E0",
        height: "100%"
    },
    titleText: {
        paddingTop: "2%",
        paddingLeft: "6%",
        fontFamily: "Comic Sans MS",
        fontSize: 60,
        fontWeight: 'bold',
    },
    box: {
        borderWidth: "1px",
        borderRadius: 5,
        marginHorizontal: "5%",
        marginTop: "5%"
    },
    labelText: {
        fontFamily: "Comic Sans MS",
        paddingLeft: "7%",
    },
});

export default function Usuarios(props)
{
    const {utils, setUtils} = useContext(UtilsContext)
    console.log(utils)
    
    function UserInformation (props)
    {
        return(
            <View style = {styles.box}>
                <Text style={styles.labelText}>Nome: {props.nome}</Text>
                <Text style={styles.labelText}>Idade: {props.idade}</Text>
                <Text style={styles.labelText}>Sexo: {props.sexo}</Text>
                <Text style={styles.labelText}>Recebe Notificação: {props.notificacao ? 'Sim' : 'Não'}</Text>
                <TouchableOpacity onPress = {() => DeleteUser(props.nome)}>
                    <Text>Excluir</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function DeleteUser (name)
    {
        var temporary = [...utils.dados];
        var temporary2 = [];
        temporary.map((item) => {
            if(item.nome !== name)
            {
                temporary2.push(item)
            }
        })
        console.log(temporary2)

        setUtils({...utils, dados: temporary2})
    }
    return(
        <View style = {styles.viewClass}>
            <Text style = {styles.titleText}>Usuários</Text>
                <FlatList
                    data={utils.dados}
                    renderItem={({item}) => <UserInformation 
                        key = {item.nome}
                        nome={item.nome}
                        idade={item.idade}
                        sexo={item.sexo}
                        notificacao={item.notificacao}
                    />}
                    keyExtractor={item => item.nome}
                />
            <TouchableOpacity style={styles.loginButton} onPress = {() => props.navigation.navigate("Cadastro")}>
                <Text style = {styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}