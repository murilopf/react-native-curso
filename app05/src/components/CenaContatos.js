import React, {Component} from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalhe_contatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FFF"}}>
 
            <StatusBar backgroundColor= "#61bd8c" />
           
            <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo="#61bd8c"/>

            <View style={styles.cabecalho}>
                <Image source={detalhe_contatos}/>
                <Text style={styles.textTitulo}> Contatos </Text>
            </View>

            <View style={styles.detalheContato}>
                <Text style={styles.txtDetalheContato}> Tel: (11) 1234-5678</Text>
                <Text style={styles.txtDetalheContato}> Celular: (11) 91239-4125</Text>
                <Text style={styles.txtDetalheContato}> E-mail: teste@teste.com.br</Text>
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
        color: "#61bd8c",
        marginLeft: 10,
        marginTop: 25
    },
    detalheContato:{
        marginTop: 20,
        padding: 20
    },
    txtDetalheContato:{
        fontSize: 18
    }

});