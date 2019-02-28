import React, {Component} from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalhe_servicoes = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFF"}}>
 
            <StatusBar backgroundColor= "#18D1C8" />
           
            <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#18D1C8"/>

            <View style={styles.cabecalho}>
                <Image source={detalhe_servicoes}/>
                <Text style={styles.textTitulo}> Nossos serviços </Text>
            </View>

            <View style={styles.detalheServico}>
                <Text style={styles.txtDetalheServico}> Consultoria de empresas </Text>
                <Text style={styles.txtDetalheServico}> Suporte financeiro </Text>
                <Text style={styles.txtDetalheServico}> Ajudas em geral sobre financas pessoais </Text>
            </View>

        </View>
    );
  }
}


const styles = StyleSheet.create({
    cabecalho:{
        flexDirection: 'row',
        marginTop: 20
    },
    textTitulo:{
        fontSize: 30,
        color: "#19D1C8",
        marginLeft: 10,
        marginTop: 25
    },
    detalheServico:{
        padding: 20,
        marginTop: 10
    },
    txtDetalheServico:{
        fontSize: 18
    }


});