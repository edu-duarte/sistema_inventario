import React from 'react';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from '../components/footerComponent';
import {
  Content, ContainerProdutos, DeleteButton, Title, LinkButton,
  Table, TableTd, TableTr
} from './styled';
import Services from '../components/utils/services';


class ListProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      message: ''
    }
    this.refreshProducts = this.refreshProducts.bind(this);
  }

  componentDidMount() {
    this.refreshProducts();
    console.log(this.props.state);
  }

  refreshProducts() {
    let s = new Services();
    this.setState({ products: s.listAllProducts() });
  }

  handleClick(product) {
    let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    produtos.push(product);
    localStorage.removeItem('produtos');
    }

  render() {
    return <>
      <NavBarComponent />
      <Content>
        <ContainerProdutos>
          {this.state.message}
          <Title>
            Lista de Produtos Cadastrados
          </Title>
          <Table>
            <thead>
              <TableTr>
                <th>Nome</th>
                <th>Marca</th>
                <th>Preço (R$)</th>
                <th>Quantidade em Estoque</th>
              </TableTr>
            </thead>
            <tbody>
              {
                this.state.products.map(product =>
                  <TableTr key={product.NomeProduto}>
                    <TableTd>{product.NomeProduto}</TableTd>
                    <TableTd>{product.Marca}</TableTd>
                    <TableTd>{product.Preco}</TableTd>
                    <TableTd>{product.Quantidade}</TableTd>
                  </TableTr>
                )
              }
            </tbody>
          </Table><br />
          <LinkButton to="/produtoscadastrados/adicionar">Adicionar Novo Produto</LinkButton><br /><br /><br />
          <DeleteButton onClick={this.handleClick}>Limpar Produtos Cadastrados</DeleteButton>
        </ContainerProdutos>
      </Content >
      <FooterComponent />
    </>
  }
}

export default ListProduct;