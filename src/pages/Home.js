import React from 'react';
import { Content, Title, ContainerHome } from './styled';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from '../components/footerComponent';

class InventarioPage extends React.Component {

  render() {
    return <>
      <NavBarComponent />
      <Content>
        <ContainerHome>
          <Title>
          <h1>Seja bem vindo ao Inventário HC_2</h1>
          </Title>
          <p>Este inventário possui uma base de dados para o armazenamento de informações sobre Clientes e Produtos. Clique nos botões correspondentes para ter acesso ao sistema.</p>
        </ContainerHome>
      </Content>
      <FooterComponent />
    </>;
  }
}

export default InventarioPage;