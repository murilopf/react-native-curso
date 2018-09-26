import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text,
  View, 
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/listaItens'

export default class App extends Component {
  render() {
    return (
      <ListaItens />
    );
  }
}

//export default app4;
AppRegistry.registerComponent('app4', () => app4);