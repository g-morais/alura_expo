import React from "react";
import { Text, StyleSheet, Image, Dimensions, View } from "react-native";

import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return  <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>  Vamos as compras? </Text>
    <View>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <Text>Fazenda do seu Zé</Text>
        <Text>Produtos totalmente organicos e cultivado em casa</Text>
        <Text>40 R$</Text>
    </View>
</>
}
const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        

    },
    nome:{
        color: "#464646",
        fontSize:26,
        fontWeight: "bold",

    }
});



