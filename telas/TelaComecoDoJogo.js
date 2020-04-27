import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Cartao from '../components/Cartao'
import Entrada from '../components/Entrada'





const TelaComecoDoJogo = (props) => {
    return (
        <View style={estilos.tela}>
            <Text style={estilos.titulo}>Comece um jogo</Text>
            <Cartao estilos={estilos.entradaView}>
                <Text>Escolha um número</Text>
                <Entrada />
                <View style={estilos.buttonsView}>
                    <View style={estilos.botao}>
                        <Button
                            title="Reiniciar"
                            color={Cores.accent}
                        />
                    </View>
                    <View style={estilos.botao}>
                        <Button
                            title="Confirmar"
                            color={Cores.accent}
                        />
                    </View>
                </View>
            </Cartao>
        </View>
    );
}

//filhos do objeto estilos
titulo: {
    fontSize: 20,
        marginVertical: 10,
    },
entradaView: {
    //300 pontos de largura
    width: 300,
        //mas no máximo, 80% da tela
        maxWidth: '80%',
            //alinhamento no eixo perpendicular (horizontal, neste caso)
            alignItems: 'center'
    shadowColor: 'black',
        shadowOffset: {
        width: 0,
            height: 2
    },
    shadowRadius: 6,
        shadowOpacity: 0.32,
            backgroundColor: 'white',
},
buttonsView: {
    //o padrão é column
    flexDirection: 'row',
        width: '100%',
            // alinhamento no eixo principal (horizontal, neste caso)
            justifyContent: 'space-between',
                paddingHorizontal: 15
}
//300 pontos de largura
width: 300,
    //mas no máximo, 80% da tela
    maxWidth: '80%',
        //alinhamento no eixo perpendicular (horizontal, neste caso)
        alignItems: 'center',
            shadowColor: 'black',
                shadowOffset: {
    width: 0,
        height: 2
},
shadowRadius: 6,
    shadowOpacity: 0.32,
        backgroundColor: 'white',
            elevation: 4
padding: 12,
    borderRadius: 8




const estilos = StyleSheet.create({
    botao: {
        width: 100
    }

});
export default TelaComecoDoJogo;


const TelaComecoDoJogo = (props) => {
    return (
        <View style={estilos.tela}>
        </View>
    );
} const estilos =
    StyleSheet.create({
        tela: {
            flex: 1, //toma todo o espaço que puder
            padding: 10,
            alignItems: 'center'
        }
        entrada: {
            width: 50,
            textAlign: 'center'
        }
            < Entrada
            style={ estilos.entrada }
        />
    });