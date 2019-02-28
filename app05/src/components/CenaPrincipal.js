import React, {Component} from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menu_cliente = require('../imgs/menu_cliente.png');
const menu_contato = require('../imgs/menu_contato.png');
const menu_empresa = require('../imgs/menu_empresa.png');
const menu_servico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View>
 
            <StatusBar
                backgroundColor= '#CCC'
            />

            <BarraNavegacao />

            <View style={styles.imgLogo}>
              <Image source={logo} />
            </View>
            
            <View style={styles.menu}>

                <View style={styles.menuGroup}>

                    <TouchableHighlight onPress={() => {
                        this.props.navigator.push({id: 'cliente'});
                    }}
                    underlayColor={'#B9C941'}
                    activeOpacity={0.3}
                    >
                       <Image style={styles.imgMenu} source={menu_cliente}/>
                    </TouchableHighlight>


                    <TouchableHighlight onPress={() => {
                        this.props.navigator.push({id: 'contato'});
                    }}
                    underlayColor={'#61bd8c'}
                    activeOpacity={0.3}
                    >
                       <Image style={styles.imgMenu} source={menu_contato}/>
                    </TouchableHighlight>
                    
                </View>

                <View style={styles.menuGroup}>

                    <TouchableHighlight onPress={() => {
                        this.props.navigator.push({id: 'empresa'});
                    }}
                    underlayColor={'#ec7148'}
                    activeOpacity={0.3}
                    >
                       <Image style={styles.imgMenu} source={menu_empresa}/>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => {
                        this.props.navigator.push({id: 'servicos'});
                    }}
                    underlayColor={'#19d1c8'}
                    activeOpacity={0.3}
                    >
                       <Image style={styles.imgMenu} source={menu_servico}/>
                    </TouchableHighlight>

                </View>  
            </View>

        </View>
    );
  }
}


const styles = StyleSheet.create({

    imgLogo : {
        marginTop: 30,
        alignItems: 'center'
    },
    menu:{
        alignItems: 'center'
    },
    menuGroup:{
        flexDirection: 'row'
    },
    imgMenu:{
        margin:15
    }


});