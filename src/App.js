import styled from 'styled-components';
import React from 'react';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';


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

  }


  adicionaNoCarrinho = (produto) => {
    const carrinhoAtualizado = [...this.state.carrinho, produto]
    this.setState({carrinho: carrinhoAtualizado})
  }


  render() {

    return (

      <MainContainer>

        <Filtro></Filtro>
        <Carrinho carrinho={this.state.carrinho}></Carrinho>
        <Home adicionaNoCarrinho={this.adicionaNoCarrinho} produtos={this.state.produtos}></Home>
        
        

      </MainContainer>

    );

  }
}



export default App;