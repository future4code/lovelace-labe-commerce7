import React from 'react';
import styled from 'styled-components';

const FiltroContainer = styled.div`
margin: 20px;
padding: 20px;
text-align: left; 
border: 1px solid black;
`




export default class Filtro extends React.Component {
    state = {

    }


    render() {
        return (
            <FiltroContainer>
                <textoContainer><h3>Filtros:</h3></textoContainer>
                <p></p>
                <label>Valor Mínimo:
                    <input type="number" value="" placeholder="R$ 0.00"></input></label>
                <p></p>
                <label>Valor Máximo:
                    <input type="number" value="" placeholder="R$ 1000.00"></input></label>
                <p></p>
                Busca por Nome:
                <input type="text" value="" placeholder="Produto"></input>
            </FiltroContainer>
        )
    }
}