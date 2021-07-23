import React from 'react';
import styled from 'styled-components';
import Carrinho from './Carrinho';
import Produtos from './Produtos';

const HomeContainer = styled.div`
margin: 0px;
padding: 0px;
display: inline;
height: 10%;
width: 10%;

`

const InputsHome = styled.div`
display: inline-block;
`


const ProdutoHome = styled.div`
display: inline-block;
border: solid 1px black;
margin: 0px;
text-align: center;
padding: 15px;
text-align: center;
:hover {
    cursor: pointer;
    background-color: darkgray;
}
`


export default class Home extends React.Component {
    state = {


        ordenacao: ""

    }

    onChangeOrdenacao = (event) => {
        this.setState(
            { ordenacao: event.target.value }
        )

    }

    render() {

        const produtosOrdenados = this.props.produtos.sort((a, b) => {

            if (this.state.ordenacao == 'decrescente') {
                return a.valor > b.valor ? -1 : a.valor > b.valor ? 1 : 0;
            } else {
                return a.valor < b.valor ? -1 : a.valor < b.valor ? 1 : 0;
            }

        })

        return (
            <HomeContainer>
                <textoContainer>Quantidade de Produtos: {this.props.produtos.length}</textoContainer>

                {produtosOrdenados.map(produto => {
                    return (
                        <ProdutoHome>
                            <img src={produto.imagem}></img>
                            <p></p>
                            <span><b>{produto.nome}</b></span>
                            <p></p>
                            <span>{produto.valor}</span>
                            <p></p>
                            <button onClick={() => this.props.adicionaNoCarrinho(produto)} >Adicionar ao Carrinho</button>
                        </ProdutoHome>

                    )
                })}

                <InputsHome>
                    <label>Ordenação: </label>
                    <select value={this.state.ordenacao} onChange={this.onChangeOrdenacao}>
                        <option value=""></option>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                </InputsHome>

            </HomeContainer>
        )
    }
}

