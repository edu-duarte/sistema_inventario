import React from 'react';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from '../components/footerComponent';
import { Content, ContainerProdutos, Input, Button, Title } from './styled';
import Services from '../components/utils/services';

class ProdutoManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      NomeProduto: '',
      Marca: '',
      Preco: '',
      Quantidade: '',
    }
  }


  handledSubmit = (e) => {
    e.preventDefault();
    
    const product = {
      NomeProduto: this.state.NomeProduto,
      Preco: this.state.Preco,
      Marca: this.state.Marca,
      Quantidade: this.state.Quantidade
    }
    let s = new Services();
    s.createProduct(product);

    this.props.history.push({
      pathname: '/produtoscadastrados',
      state: { message: 'Adicionar Novo Produto ' + this.state.NomeProduto + ' Successful' }
    });
  }

  render() {
    return <>
      <NavBarComponent />
      <Content>
        <ContainerProdutos>
          <form onSubmit={this.handledSubmit}>
            <Title>
              Cadastrar Produtos
            </Title>
            <Input type="text" name="NomeProduto" id="NomeProduto" value={this.state.NomeProduto}
              placeholder="Nome do Produto" onChange={e => this.setState({ NomeProduto: e.target.value })} required />
            <Input type="number" name="Preco" id="Preco" value={this.state.Preco}
              placeholder="Preço" onChange={e => this.setState({ Preco: e.target.value })} required />
            <Input type="text" name="Marca" id="Marca" value={this.state.Marca}
              placeholder="Marca do Produto" onChange={e => this.setState({ Marca: e.target.value })} required />
            <Input type="number" min="1" max="9999" value={this.state.Quantidade} placeholder="Quantidade" onChange={e => this.setState({ Quantidade: e.target.value })} required />
            <Button type="submit">Cadastrar</Button>
          </form>
        </ContainerProdutos>
      </Content>
      <FooterComponent />
    </>
  }
}

export default ProdutoManager;