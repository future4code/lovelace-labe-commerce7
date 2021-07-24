import React from 'react';
import styled from 'styled-components';

const FiltroContainer = styled.div`
margin: 0px;
text-align: center; 
border: 1px solid black;
padding: 5px;
display: inline-block;
height: 100%;
width: 100%;
`


export default class Filtro extends React.Component {

    render() {
        return (
            <FiltroContainer>
                <textoContainer><h3>Filtros:</h3></textoContainer>
                <p></p>
                <label>Valor Mínimo:
                    <input type="number" onChange={this.props.onChangeValorMinimo} value={this.props.valorMinimo} placeholder="R$ 0.00"></input></label>
                <p></p>
                <label>Valor Máximo:
                    <input type="number" onChange={this.props.onChangeValorMaximo} value={this.props.valorMaximo} placeholder="R$ 1000.00"></input></label>
                <p></p>
                Busca por Nome:
                <input type="text" onChange={this.props.onChangeNome} value={this.props.nome} placeholder="Produto"></input>
            </FiltroContainer>
        )
    }
}