import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewClass: {
        backgroundColor: "#E0E0E0",
        height: "100%"
    },
    box: {
        borderWidth: "1px",
        borderRadius: 5,
        marginHorizontal: "5%",
        marginTop: "15%",
        marginBottom: "15%",
        height: "100px"
    },
    operacoes: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: "7%",
        marginBottom: "25%",
    },
    digitBox: {
        backgroundColor: "white",
        height: "50px",
        width: "50px",
        borderRadius: "7px",
        justifyContent: "center",
    },
    caracteres: {
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "bold",
        marginBottom: "5px",
    },
    numberGrid: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: "25%",
        marginBottom: "6%",
    },
    numberGrid0: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: "25%",
        marginBottom: "6%",
    },
    buttonsGrid: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: "7%",
        marginTop: "35%"
    },
    buttons: {
        backgroundColor: "white",
        height: "50px",
        borderRadius: "7px",
        justifyContent: "center",
        
    },
})

export default function Index(props)
{
    return(
        <View style = {styles.viewClass}>
            <View style = {styles.box}></View>
            <View style = {styles.operacoes}>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>+</Text> </View>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>-</Text> </View>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>/</Text> </View>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>X</Text> </View>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>=</Text> </View>
            </View>
            <View style = {styles.numberGrid}>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>1</Text> </View>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>2</Text> </View>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>3</Text> </View>
            </View>
            <View style = {styles.numberGrid}>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>4</Text> </View>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>5</Text> </View>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>6</Text> </View>
            </View>
            <View style = {styles.numberGrid}>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>7</Text> </View>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>8</Text> </View>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>9</Text> </View>
            </View>
            <View style = {styles.numberGrid0}>
                <View style = {styles.digitBox}> <Text style = {styles.caracteres}>0</Text> </View>
            </View>
            <View style = {styles.buttonsGrid}>
                <View style = {styles.buttons}> <Text style = {styles.caracteres}>Limpar</Text> </View>
                <View style = {styles.buttons}> <Text style = {styles.caracteres}>Histórico</Text> </View>
            </View>
        </View>
    )
}