import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
margin: 0px;
padding: 100px;
display: inline;
height: 10%;
width: 10%;
button { height: 30px;
        :hover {
            cursor: pointer;
            background-color: darkgray;
            border-radius: 20px;
        };
}
img {
  display: inline;
  justify-content: center;
  padding-top: 0px;
  margin-top: 0px;
  margin: 0px;
  border-radius: 20px;
}
h4 {
    text-align: center;
}
span {
    display: block;
    text-align: center;
}

`

const InputsHome = styled.div`
display: inline-block;
label {
    display: flex;
    text-align: center;
    align-items: center;
}
`

const ProdutoHome = styled.div`
display: inline-block;
margin: 10px;
text-align: center;
padding: 0px 2px 0px 2px;

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

        const produtos = produtosOrdenados
            .filter(produto => {
                if (!this.props.valorMinimo || (produto.valor >= this.props.valorMinimo)) {
                    return true
                } else { return false }
            })
            .filter(produto => {
                if (!this.props.valorMaximo || (produto.valor <= this.props.valorMaximo)) {
                    return true
                } else { return false }
            })
            .filter(produto => {
                if (!this.props.nome || (produto.nome.toLowerCase().includes(this.props.nome.toLowerCase()))) {
                    return true
                } else { return false }
            })

        const produtosFiltrados = produtos.map(produto => {
            return (
                <ProdutoHome>
                    <img src={produto.imagem}></img>
                    <p></p>
                    <span><b>{produto.nome}</b></span>
                    <p></p>
                    <span>R$ {produto.valor}</span>
                    <p></p>
                    <button onClick={() => this.props.adicionaNoCarrinho(produto)} >Adicionar ao Carrinho</button>
                </ProdutoHome>
            )
        })

        return (
            <HomeContainer>
                <InputsHome>
                    <label>Ordenação: </label>
                    <select value={this.state.ordenacao} onChange={this.onChangeOrdenacao}>
                        <option value=""></option>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                </InputsHome>
                <textoContainer><h4>Quantidade de Produtos: {this.props.produtos.length}</h4></textoContainer>

                {produtosFiltrados}


            </HomeContainer>
        )
    }
}

