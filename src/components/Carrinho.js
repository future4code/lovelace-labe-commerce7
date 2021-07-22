import React from 'react';
import styled from 'styled-components';
import Home from './Home';

const CarrinhoContainer = styled.div`
/* display: flex;
margin-top: 100px; */
padding: 50px;
height: 350px;
width: 200px;
border: solid black 1px;
text-align: end;
/* align-items: flex-end; */
`

export default class Carrinho extends React.Component {
    state = {
        // novosProdutos =[],

        // somaProdutos = ""

    }

    adicionaProduto = (produto) => {
        console.log(produto)
        /*const novosProdutos = {
            id: Date.now(),
            valor: "",

        }

        this.setState({
            produtos: [... this.state.produtos, novosProdutos]
        })*/

    }

    render() {
        return (
            <CarrinhoContainer>
                <textoContainer><h3>Carrinho:</h3></textoContainer>
                <p></p>
                <button type="submit">Remover</button>
                <p></p>
                <button type="submit">Remover</button>
                <p></p>
                <button type="submit">Remover</button>
            </CarrinhoContainer>
        )
    }
}