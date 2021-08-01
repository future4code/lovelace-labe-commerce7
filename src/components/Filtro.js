import React from 'react';
import styled from 'styled-components';

const FiltroContainer = styled.div`
margin: auto;
text-align: center; 
border: 1px solid black;
align-items: center;
padding: 5px;
display: flex;
height: 100%;
width: 1000px;
input {
    margin: 20px;
    display: inline-block;
    padding: 5px;
    border-radius: 20px;
    align-items: center;
}
h3 {
    text-align: left;
    padding: 5px;
    margin: 10px;
}
p {
    text-align: center;
    align-self: center;
    display: flex;
}
`


export default class Filtro extends React.Component {

    render() {
        return (
            <FiltroContainer>
                <textoContainer><h3><p>Filtros: </p></h3></textoContainer>

                <label> Valor Mínimo:
                    <input type="number" onChange={this.props.onChangeValorMinimo} value={this.props.valorMinimo} placeholder="R$ 0.00"></input></label>

                <label>Valor Máximo:
                    <input type="number" onChange={this.props.onChangeValorMaximo} value={this.props.valorMaximo} placeholder="R$ 1000.00"></input></label>

                <label>Busca por Nome:
                    <input type="text" onChange={this.props.onChangeNome} value={this.props.nome} placeholder="Produto"></input></label>
            </FiltroContainer>
        )
    }
}