import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry, TouchableOpacity, Alert} from 'react-native';

const Estilos = {
  principal:{
    flex: 1, //irá ocupar toda a tela
    justifyContent: 'center', //Justica no centro
    alignItems: 'center' //alinha os items no centro
  },
  botao:{
    backgroundColor: "#538530",
    color: '#FFF',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  textoBotao:{
    color: "#FFF",
    fontSize: 16,
    //fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.floor(Math.random() * 5);

  //frases
  var frases = Array();
  frases[0] = 'aa';
  frases[1] = 'bb';
  frases[2] = 'cc';
  frases[3] = 'dd';
  frases[4] = 'ee';

  Alert.alert( frases[ numeroAleatorio ]);

}

const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return(
    <View style={principal}>

      <Image source={require('./imagem/logo.png')}/>

      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}>
  
        <Text style={textoBotao}> NOVA FRASE</Text>
      </TouchableOpacity>

    </View>
  );
}

export default App;

AppRegistry.registerComponent('app1',() => App);