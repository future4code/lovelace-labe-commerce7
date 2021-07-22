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
  
  render () {
    
    return (
    
     <MainContainer>

       <Filtro></Filtro>
       <Home></Home>
       <Carrinho></Carrinho>
       
     </MainContainer>
    
      );
   
  }
}



export default App;