import styled from 'styled-components';
import React from 'react';
import Home from './components/Home';

const MainContainer = styled.div`
margin: 0px;
padding: 0px;

`

class App extends React.Component {
  
  render () {
    return (
     <MainContainer>
       <Home></Home>
     </MainContainer>
    
      );
   
  }
}



export default App;