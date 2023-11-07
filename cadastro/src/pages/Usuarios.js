import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Pressable } from "react-native";
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
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

function UserInformation (props)
{
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style = {styles.box}>
                <Text style={styles.labelText}>Nome: {props.nome}</Text>
                <Text style={styles.labelText}>Idade: {props.idade}</Text>
                <Text style={styles.labelText}>Sexo: {props.sexo}</Text>
                <Text style={styles.labelText}>Recebe Notificação: {props.notificacao ? 'Sim' : 'Não'}</Text>
                <TouchableOpacity onPress = {() => props.deleteUser(props.nome)}>
                    <Text>Excluir</Text>
                </TouchableOpacity>
                <UserModal
                modalVisible = {modalVisible}
                setModalVisible = {setModalVisible}
                nome = {props.nome}
                idade = {props.idade}
                sexo = {props.sexo}
                email = {props.email}
                senha = {props.senha}
            /> 
            </View>
        </TouchableWithoutFeedback>
    )
}

function UserModal (props)
{
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                props.setModalVisible(!props.modalVisible);
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.labelText}>Nome: {props.nome}</Text>
                    <Text style={styles.labelText}>Idade: {props.idade}</Text>
                    <Text style={styles.labelText}>Sexo: {props.sexo}</Text>
                    <Text style={styles.labelText}>Email: {props.email}</Text>
                    <Text style={styles.labelText}>Senha: {props.senha}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => props.setModalVisible(!props.modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default function Usuarios(props)
{
    const {utils, setUtils} = useContext(UtilsContext)

    function deleteUser (name)
    {
        var temporary = [...utils.dados];
        var temporary2 = [];
        temporary.map((item) => {
            if(item.nome !== name)
            {
                temporary2.push(item)
            }
        })

        setUtils({...utils, dados: temporary2})
    }
    return(
        <View style = {styles.viewClass}>
            <Text style = {styles.titleText}>Usuários</Text>
                <FlatList
                    data={utils.dados}
                    renderItem = {({item}) => <UserInformation 
                        key = {item.nome}
                        nome = {item.nome}
                        idade = {item.idade}
                        sexo = {item.sexo}
                        email = {item.email}
                        senha = {item.senha}
                        notificacao = {item.notificacao}
                        deleteUser = {deleteUser}
                    />}
                    keyExtractor={item => item.nome}
                />
           <TouchableOpacity style={styles.loginButton} onPress = {() => props.navigation.navigate("Cadastro")}>
                <Text style = {styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}