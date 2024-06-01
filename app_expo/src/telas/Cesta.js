import React from "react";
import { Text, StyleSheet, Image, Dimensions, View } from "react-native";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return  <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>  Vamos as compras? </Text>
    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <View style={estilos.fazenda}>

        <Text style={estilos.nomeFazenda}>Fazenda do seu Zé</Text>
        <Image source={logo} style={estilos.imagemFazenda}/>

        </View>
        <Text style={estilos.descricao}>Produtos totalmente organicos e cultivado em casa</Text>
        <Text style={estilos.preco}>40 R$</Text>
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
        fontSize:30,
        fontWeight: "bold",

    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginRight: 12,
    },
    fazenda:{
        flexDirection: "row",
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
      },
    });