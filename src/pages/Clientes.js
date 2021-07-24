import React from 'react';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from './../components/footerComponent';
import { Content, ContainerClientes, Input, Button, Title } from './styled';
import Services from '../components/utils/services';

class ClienteManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Nome: '',
      CPF: '',
      Email: '',
      Endereco: '',
      CEP: '',
      Cidade: '',
      Estado: ''
    }
  }

  handledSubmit = (e) => {
    e.preventDefault();
    const client = {
      Nome: this.state.Nome,
      CPF: this.state.CPF,
      Email: this.state.Email,
      Endereco: this.state.Endereco,
      CEP: this.state.CEP,
      Cidade: this.state.Cidade,
      Estado: this.state.Estado

    }
    let s = new Services();
    s.createClient(client);

    this.props.history.push({
      pathname: '/clientescadastrados',
      state: { message: 'Adicionar Client ' + this.state.Nome + ' Successful' }
    });
  }

  render() {
    return <>
      <NavBarComponent />
      <Content>
        <ContainerClientes>
          <form onSubmit={this.handledSubmit}>
            <Title>
              Cadastrar Cliente
            </Title>
            <Input type="text" name="Nome" id="Nome" value={this.state.Nome}
              placeholder="Seu Nome" onChange={e => this.setState({ Nome: e.target.value })} required />
            <Input type="Email" name="Email" id="Email" value={this.state.Email}
              placeholder="Email" onChange={e => this.setState({ Email: e.target.value })} required />
            <Input type="number" name="CPF" id="CPF" value={this.state.CPF}
              placeholder="CPF" maxLength="11" onChange={e => this.setState({ CPF: e.target.value })} required />
            <Input type="text" name="Endereco" id="Endereco" value={this.state.Endereco}
              placeholder="Endereço Completo (Rua, Nº, Bairro)" onChange={e => this.setState({ Endereco: e.target.value })} required />
            <Input type="number" name="CEP" id="CEP" value={this.state.CEP}
              placeholder="CEP" onChange={e => this.setState({ CEP: e.target.value })} required />
            <Input type="text" name="Cidade" id="Cidade" value={this.state.Cidade}
              placeholder="Cidade" onChange={e => this.setState({ Cidade: e.target.value })} required />
            <Input type="text" name="Estado" id="Estado" value={this.state.Estado}
              placeholder="Estado" onChange={e => this.setState({ Estado: e.target.value })} required />
            <Button type="submit">Cadastrar</Button>
          </form>
        </ContainerClientes>
      </Content >
      <FooterComponent />
    </>
  }
}

export default ClienteManager;