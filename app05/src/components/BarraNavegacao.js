import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {

    if(this.props.voltar){
        return (
            <View style={[styles.barraTitulo, { backgroundColor: this.props.corDeFundo }]}>
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigator.pop();
                    }}
                    underlayColor={this.props.corDeFundo}
                    activeOpacity={0.3}
                >
                    <Image source={btnVoltar} />
                </TouchableHighlight>
                <Text style={styles.textoTitulo}>ATM Consultoria</Text>
            </View>
        );
    }

    return (
        <View style={styles.barraTitulo}>
            <Text style={styles.textoTitulo}>ATM Consultoria</Text>
        </View>
    );

  }
}

const styles = StyleSheet.create({
    barraTitulo : {
        flexDirection: 'row',
        backgroundColor: "#CCC",
        padding: 10,
        height: 60
    },
    textoTitulo: {
        flex: 1, // flex 1 faz a label ocupar todo o espaço da view
        fontSize: 18,
        textAlign: 'center',
        color: "#000"
    }
});
