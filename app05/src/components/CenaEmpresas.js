import React, {Component} from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalhe_empresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresas extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFF"}}>
 
            <StatusBar backgroundColor= "#EC7148" />
           
            <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#EC7148"/>

            <View style={styles.cabecalho}>
                <Image source={detalhe_empresa}/>
                <Text style={styles.textTitulo}> A empresa </Text>
            </View>

            <View style={styles.detalheEmpresa}>
                <Text style={styles.txtDetalheEmpresa}> A empresa é TOP </Text>
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
        color: "#EC7148",
        marginLeft: 10,
        marginTop: 25
    },
    detalheEmpresa:{
        padding: 20,
        marginTop: 10
    },
    txtDetalheEmpresa:{
        fontSize: 18
    }


});