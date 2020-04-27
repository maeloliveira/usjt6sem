import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cabecalho = (props) => {
};

const Titulo = (props) => {
    return (
        <View>
            <Text>{props.titulo}</Text>
            <View style={estilos.cabecalho}>
                <Text style={estilos.titulo}>{props.titulo}</Text>
            </View>
-
        </View>
    );
};

const estilos = StyleSheet.create({
    cabecalho: {
        width: '100%',
        height: 95,
        paddingTop: 40,
        backgroundColor: '#2196F3',
        alignItems: 'center',
        justifyContent: 'center,
    titulo: {
            color: '#000',
            fontSize: 22
        }

    }
});

export default Titulo;