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

    
        // somaProdutos = ""


    adicionaProduto = (produto) => {
        console.log(produto)


        // this.setState({
        //     produtos: [... this.state.produtos, novoProduto]
        // })
    }

    adicionaValorCarrinho= () => {
        this.setState({valorCarrinho: this.state.valorCarrinho + this.state.valorProduto})

      }
    removeValorCarrinho = () => {
        this.setState({valorCarrinho: this.adicionaValorCarrinho - this.state.valorProduto })
    }

    render() {

        return (
            <CarrinhoContainer>
                <textoContainer><h3>Carrinho:</h3></textoContainer>
                <p></p>
                <button type="submit"onClick={this.removeValorCarrinho}>Remover</button>
                <p></p>
                <button type="submit"onClick={this.removeValorCarrinho}>Remover</button>
                <p></p>
                <button type="submit" onClick={this.removeValorCarrinho}>Remover</button>
            </CarrinhoContainer>
        )
    };
    
}