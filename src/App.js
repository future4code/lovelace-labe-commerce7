import styled from 'styled-components';
import React from 'react';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';


const MainContainer = styled.div`
margin: 0px;
padding: 0px;
display: flex;
`


class App extends React.Component {
  state = {
  
    carrinho: [],

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

  }
  adicionaNoCarrinho = (produtos) =>{
    console.log("adicionei item no carrinho")
    const novoProduto = {
      carrinho: 
          {
              id: Date.now(),
              nomeProduto: 'Camisa Nasa',
              valorProduto: 55.00,
              valorCarrinho: 0,

          }
      
  }
  const novoCarrinho = [...this.state.carrinho, novoProduto]
  
  this.setState({carrinho: novoCarrinho})
  }
  render () {
    
    return (
    
     <MainContainer>

       <Filtro></Filtro>
       <Home adicionaNoCarrinho={this.adicionaNoCarrinho} produtos={this.state.produtos}></Home>
       <Carrinho></Carrinho>
       
     </MainContainer>
    
      );
   
  }
}



export default App;