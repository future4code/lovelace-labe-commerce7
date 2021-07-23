import React from 'react';
import styled from 'styled-components';
import Home from './Home';

const CarrinhoContainer = styled.div`
margin: 0px;
text-align: inherit; 
padding: 5px;
display: inline-block;
height: 100%;
width: 100%;
border: solid black 1px;
text-align: center;
/* align-items: flex-end; */
`

const ProdutoCarrinho = styled.div

export default class Carrinho extends React.Component {

    state = {
        carrinhoAgrupado: []
    }

    /*adicionaValorCarrinho= () => {
        this.setState({valorCarrinho: this.state.valorCarrinho + this.state.valorProduto})

      }*/
    removeValorCarrinho = () => {
        //this.setState({valorCarrinho: this.adicionaValorCarrinho - this.state.valorProduto })
    }

    agruparPor = (objetoArray, propriedade) => {
        return objetoArray.reduce(function (acc, obj) {
            let key = obj[propriedade];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    render() {

        let valorTotal = 0
        const produtosAgrupados = []
        let agruparPor = this.agruparPor(this.props.carrinho, 'id')
        console.log(agruparPor)

        return (
            <CarrinhoContainer>
                <textoContainer><h3>Carrinho:</h3></textoContainer>
                <p></p>
                {
                    this.props.carrinho.map(produto => {
                        /*console.log(produto)
                        if(produtosAgrupados.find(produtoAgrupado => produtoAgrupado.id == produto.id) == undefined) {
                            console.log("não existe")
                            produtosAgrupados.push({
                                "id": produto.id,
                                "quantidade": 1,
                                "nome": produto.nome
                            })
                        } else {
                            produtosAgrupados.find(produtoAgrupado => produtoAgrupado.id == produto.id).quantidade++
                            console.log("já existe")
                        }*/
                        valorTotal = valorTotal + produto.valor
                        return (
                            <div>
                                <span>1x </span><span>{produto.nome}</span>
                            </div>
                        )
                    })
                }
                <div><span>Valor total: {valorTotal}</span></div>
            </CarrinhoContainer>
        )
    };

}