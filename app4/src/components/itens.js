import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

export default class Itens extends Component {
  
    render() {
        return (
            <View style={styles.item}>
                
                <View style={styles.foto}>
                   <Image style={{ height:100, width:100 }} source ={{ uri: this.props.item.foto }} />
                </View>

                <View style={styles.detalhesItem}>     
                    <Text style={styles.txtTitulo}> { this.props.item.titulo } </Text>
                    <Text style={styles.txtValor}>R$ { this.props.item.valor } </Text>
                    <Text style={styles.txtDetalhes}>Local: { this.props.item.local_anuncio } </Text>
                    <Text style={styles.txtDetalhes}>Data publicação: { this.props.item.data_publicacao } </Text>
                </View>
          
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: "#FAFAFA",
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        elevation: 1,
        borderRadius: 4
    },
    foto:{
        width: 102,
        height: 102
    },
    detalhesItem:{
        marginLeft: 20,
        flex: 1
    },
    txtTitulo:{
        fontSize: 18,
        //fontWeight: 'bold',
        color: 'blue',
        marginBottom: 8
    },
    txtValor:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtDetalhes:{
        fontSize:16
    }
});