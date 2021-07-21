import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
margin: 0px;
padding: 0px;
text-align: left;
display: flex;
align-items: center;
`

const InputsHome = styled.div`
margin: 10px;

`

// const textoContainer = styled.div`
// display: flex;
// text-align: left;
// `


const ProdutoHome = styled.div`
display: inline-block;
border: solid 1px black;
margin: 5px;
padding: 15px;
text-align: center;
:hover {
    cursor: pointer;
    background-color: darkgray;
}
`

const Button = styled.button`
`

export default class Home extends React.Component {
    state = {
        produtos: [{
            id: Date.now(),
            nome: "Camiseta estampa espacial - NASA Branca ",
            valor: "R$ 55.00",
            imagem: "https://i.pinimg.com/236x/3a/e3/f2/3ae3f21b4d72313d1db22cf82fd10b44.jpg"
        },

        {
            id: Date.now(),
            nome: "Camiseta estampa espacial - NASA Preta  ",
            valor: "R$ 60.00",
            imagem: "https://i.pinimg.com/236x/f6/33/48/f63348d9b483f867e457d9018af3bf29.jpg"

        },

        {
            id: Date.now(),
            nome: "Camiseta estampa espacial - NASA Cinza ",
            valor: "R$ 50.00",
            imagem: "https://i.pinimg.com/236x/d1/7d/0e/d17d0ebff04a1c400abde52742d625c8.jpg"
        }

        ],


        ordenacao: ""

    }

    onChangeOrdenacao = (event) => {
        this.setState(
            { ordenacao: event.target.value }
        )

    }

    render() {

        const produtosOrdenados = this.state.produtos.sort((a, b) => {

            if (this.state.ordenacao == 'decrescente') {
                return a.valor > b.valor ? -1 : a.valor > b.valor ? 1 : 0;
            } else {
                return a.valor < b.valor ? -1 : a.valor < b.valor ? 1 : 0;
            }

        })

        return (
            <HomeContainer>
                <textoContainer>Quantidade de Produtos: {this.state.produtos.length}</textoContainer>

                {produtosOrdenados.map(produto => {
                    return (
                        <ProdutoHome>
                            <img src={produto.imagem}></img>
                            <p></p>
                            <span><b>{produto.nome}</b></span>
                            <p></p>
                            <span>{produto.valor}</span>
                            <p></p>
                            <button type="submit">Adicionar ao Carrinho</button>
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

