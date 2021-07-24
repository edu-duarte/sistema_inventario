import React from 'react';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from '../components/footerComponent';
import {
  Content, ContainerClientes, Title, LinkButton,
  Table, TableTd, TableTr, DeleteButton
} from './styled';
import Services from '../components/utils/services';

class ListClient extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      message: ''
    }
    this.refreshClients = this.refreshClients.bind(this);
  }

  componentDidMount() {
    this.refreshClients();
    console.log(this.props.state);
  }

  refreshClients() {
    let s = new Services();
    this.setState({ clients: s.listAllClients() });
  }

  handleClick(client) {
    let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    clientes.push(client);
    localStorage.removeItem('clientes');
    }

  render() {
    return <>
      <NavBarComponent />
      <Content>
        <ContainerClientes>
          {this.state.message}
          <Title>
            Lista de Clientes Cadastrados
          </Title>
          <Table>
            <thead>
              <TableTr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Endereço</th>
                <th>CEP</th>
                <th>Cidade</th>
                <th>Estado</th>
              </TableTr>
            </thead>
            <tbody>
              {
                this.state.clients.map(client =>
                  <TableTr key={client.Nome}>
                    <TableTd>{client.Nome}</TableTd>
                    <TableTd>{client.Email}</TableTd>
                    <TableTd>{client.Endereco}</TableTd>
                    <TableTd>{client.CEP}</TableTd>
                    <TableTd>{client.Cidade}</TableTd>
                    <TableTd>{client.Estado}</TableTd>
                  </TableTr>
                )
              }
            </tbody>
          </Table><br />
          <LinkButton to="/clientescadastrados/adicionar">Adicionar Novo Cliente</LinkButton><br /><br /><br />
          <DeleteButton onClick={this.handleClick}>Limpar Clientes Cadastrados</DeleteButton>
        </ContainerClientes>
      </Content >
      <FooterComponent />
    </>
  }
}

export default ListClient;