import React, {Component} from 'react';
import {
  AppRegistry,
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native';
import Topo from './src/componentes/topo';
import Icone from './src/componentes/icone';

class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    }
  };

  jokenpo(escolhaUsuario){
  
    var escolhaComputador = '';
    var result = '';

    switch(Math.floor(Math.random() * 3)){
      case 0:
        escolhaComputador = 'pedra';
        break;
      case 1:
        escolhaComputador = 'papel';
        break;
      case 2:
        escolhaComputador = 'tesoura';
        break;
    }

    //pedra
    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == escolhaComputador){
        result = "Empate"
      }else{
        if(escolhaUsuario == 'papel'){
          result = "Você ganhou";
        }else{
          result = "Você perdeu"
        }
      }
    }  

    //papel
    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == escolhaComputador){
        result = "Empate"
      }else{
        if(escolhaUsuario == 'tesoura'){
          result = "Você ganhou";
        }else{
          result = "Você perdeu"
        }
      }
    } 

    //tesoura
    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == escolhaComputador){
        result = "Empate"
      }else{
        if(escolhaUsuario == 'pedra'){
          result = "Você ganhou";
        }else{
          result = "Você perdeu"
        }
      }
    } 

    this.setState({ 
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: result
    });
  }

  render(){
    return(
      <View>

        <Topo></Topo>
        
        <View  style={styles.painelAcoes} >
          <View style={styles.btnEscolha}>
             <Button title="pedra" onPress={() => { this.jokenpo('pedra') }}/> 
          </View>
          
          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => { this.jokenpo('papel') }}/>
          </View>

          <View style={styles.btnEscolha}>
             <Button title="tesoura" onPress={() => { this.jokenpo('tesoura') }}/> 
           </View>
        </View>
                
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
        </View>
      </View>

    );
  }
}

//estilos
const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    marginTop: 20,
    marginLeft: 16, marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  palco:{
    alignItems: 'center',
    marginTop: 15
  },
  txtResultado:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
})

export default app3;
AppRegistry.registerComponent('app3', () => app3);