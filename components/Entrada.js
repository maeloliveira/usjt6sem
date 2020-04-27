import React from 'react'
import { TextInput, StyleSheet } from 'react-native';
const Entrada = (props) => {
    return (
        <TextInput style={{ ...estilos.entrada, ...props.estilos }} />
    );
};

<Entrada
    style={estilos.entrada}
    autoCapitalize='none'
    blurOnSubmit
    autoCorrect={false}
    keyboardType="number-pad"
    maxLenth={2}
/>

const estilos = StyleSheet.create({
    entrada: {
    }
});

const estilos = StyleSheet.create({
    entrada: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});
export default Entrada;