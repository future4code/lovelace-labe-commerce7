import styled from 'styled-components';
import React from 'react';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import { parse, stringify } from 'flatted';


const MainContainer = styled.div`
margin: 0px;
padding: 0px;
display: inline-block;
`


class App extends React.Component {
  state = {

    carrinho: [],

    produtos: [{
      id: 1,
      nome: "Camiseta estampa espacial - NASA Branca ",
      valor: 55,
      imagem: "https://i.pinimg.com/236x/3a/e3/f2/3ae3f21b4d72313d1db22cf82fd10b44.jpg"
    },

    {
      id: 2,
      nome: "Camiseta estampa espacial - NASA Preta  ",
      valor: 60,
      imagem: "https://i.pinimg.com/236x/f6/33/48/f63348d9b483f867e457d9018af3bf29.jpg"

    },

    {
      id: 3,
      nome: "Camiseta estampa espacial - NASA Cinza ",
      valor: 50,
      imagem: "https://i.pinimg.com/236x/d1/7d/0e/d17d0ebff04a1c400abde52742d625c8.jpg"
    }

    ],

    valorMinimo: "",
    valorMaximo: "",
    nome: "",
    valorTotalCarrinho: 0

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.carrinho !== this.state.carrinho) {
      this.atualizaValorTotalCarrinho()
    }
  }

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value })
  }

  adicionaNoCarrinho = (produto) => {
    let contador = 0

    const carrinhoParaAtualizar = [...this.state.carrinho]
    console.log(produto)
    carrinhoParaAtualizar.map(produtoNoCarrinho => {
      if (produtoNoCarrinho.id == produto.id) {
        contador++
        produtoNoCarrinho.valorItem = produto.valor
        produtoNoCarrinho.valorTotal = produtoNoCarrinho.valorTotal + produto.valor
        produtoNoCarrinho.quantidade++
        return produtoNoCarrinho
      }
    })

    if (contador == 0) {
      const produtoParaAdicionar = {
        "id": produto.id,
        "nome": produto.nome,
        "valorItem": produto.valor,
        "valorTotal": produto.valor,
        "quantidade": 1
      }
      this.setState({ carrinho: [...this.state.carrinho, produtoParaAdicionar] })
    } else {
      this.setState({ carrinho: carrinhoParaAtualizar })
    }

  }

  removerDoCarrinho = (id) => {
    const carrinhoParaAtualizar = [...this.state.carrinho]
    for (let i = 0; i < carrinhoParaAtualizar.length; i++) {
      if (id == carrinhoParaAtualizar[i].id) {
        if (carrinhoParaAtualizar[i].quantidade > 1) {
          carrinhoParaAtualizar[i].quantidade--
          carrinhoParaAtualizar[i].valorTotal = carrinhoParaAtualizar[i].valorTotal - carrinhoParaAtualizar[i].valorItem
        } else {
          carrinhoParaAtualizar.splice(i, 1)
        }
      }
    }
    this.setState({ carrinho: carrinhoParaAtualizar })
  }

  atualizaValorTotalCarrinho = () => {
    let somaValor = 0
    this.state.carrinho.map(produto => {
      somaValor = somaValor + produto.valorTotal
    })

    this.setState({ valorTotalCarrinho: somaValor })
  }

  render() {

    return (

      <MainContainer>

        <Filtro
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeNome={this.onChangeNome}>
        </Filtro>
        <Carrinho
          carrinho={this.state.carrinho}
          valorTotalCarrinho={this.state.valorTotalCarrinho}
          removerDoCarrinho={this.removerDoCarrinho}>
        </Carrinho>
        <Home
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          nome={this.state.nome}
          adicionaNoCarrinho={this.adicionaNoCarrinho}
          produtos={this.state.produtos}>
        </Home>

      </MainContainer>

    );

  }
}



export default App;