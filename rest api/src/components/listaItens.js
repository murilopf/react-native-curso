import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import axios from 'axios';
import Itens from './itens';

export default class ListaItens extends Component {

    constructor(props){
        super(props);

        this.state = { listaItens : [] };
    }

    componentWillMount() {
        //requisição HTTP
        //http://faus.com.br/recursos/c/dmairr/api/itens.html
        console.log('AAA');
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => { this.setState({ listaItens : response.data }); })
            .catch(() => { console.log('Erro ao recuperar os dados'); });
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: "#DDD" }}>
                {   
                    this.state.listaItens.map( item => 
                        (
                            <Itens key={ item.titulo } item={ item } />
                        )
                    ) 
                }
            </ScrollView>
        );
    }
}
