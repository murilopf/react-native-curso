import React, {Component} from 'react';
import {
  AppRegistry,
  Platform, 
  View,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'


import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresas from './src/components/CenaEmpresas';
import CenaServicos from './src/components/CenaServicos';

export default class App extends Component {
  render() {
    return (

        <Navigator
          initialRoute={{ 
            id: 'principal'
            /* ROTA */ 
          }}
          renderScene={(route, navigator) => {
            /* Definir a cena com base na rota */
              if(route.id === 'principal'){
                 //mostra cena principal
                 return(<CenaPrincipal navigator={navigator}/>);
              }

              if(route.id === 'cliente'){
                //mostra cena dos clientes
                return(<CenaClientes navigator={navigator}/>);
              }

              if(route.id === 'contato'){
                //mostra cena dos clientes
                return(<CenaContatos navigator={navigator}/>);
              }

              if(route.id === 'empresa'){
                //mostra cena dos clientes
                return(<CenaEmpresas navigator={navigator}/>);
              }

              if(route.id === 'servicos'){
                //mostra cena dos clientes
                return(<CenaServicos navigator={navigator}/>);
              }

          }}
        />

    );
  }
}

AppRegistry.registerComponent('app05', () => app05);