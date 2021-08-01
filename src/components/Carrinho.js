import React from 'react';
import styled from 'styled-components';

const CarrinhoContainer = styled.div`
margin: 0px;
text-align: inherit; 
padding: 5px;
display: inline-block;
height: 100%;
width: 100%;

text-align: center;
button {height: 30px;
        :hover {
            cursor: pointer;
            background-color: darkgray;
            border-radius: 20px;
        };
};
span { display: inline;
    padding: 10px;
    text-align: center;

}
`


export default class Carrinho extends React.Component {

    render() {

        return (
            <CarrinhoContainer>
                <textoContainer><h3>Carrinho:</h3></textoContainer>
                <p></p>
                {this.props.carrinho.map(produto => {
                    return (
                        <div>
                            <span>{produto.quantidade}x </span><span>{produto.nome}</span>
                            <button onClick={() => this.props.removerDoCarrinho(produto.id)} >Remover do Carrinho</button>
                        </div>
                    )
                })
                }
                <div><span>Valor Total: R$ {this.props.valorTotalCarrinho}</span></div>
            </CarrinhoContainer>
        )
    };

}