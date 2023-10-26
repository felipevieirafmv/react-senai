import { View, Text, StyleSheet, FlatList } from "react-native";
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
    const {utils, setContext} = useContext(UtilsContext)
    console.log(utils)
    return(
        <View style = {styles.viewClass}>
            <Text style = {styles.titleText}>Usuários</Text>
            <View style = {styles.box}> 
                <FlatList
                    data={utils.dados}
                    renderItem={({item}) => <View style = {{width: "100%"}}>
                            <Text style={styles.labelText}>Nome: {item.nome}</Text>
                            <Text style={styles.labelText}>Idade: {item.idade}</Text>
                            <Text style={styles.labelText}>Sexo: {item.sexo}</Text>
                            <Text style={styles.labelText}>Recebe Notificação: {item.notificacao ? 'Sim' : 'Não'}</Text>
                        </View>}
                    keyExtractor={item => item.id}
                />
            </View> 
        </View>
    )
}