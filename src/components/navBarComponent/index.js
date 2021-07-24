import React from 'react';
import { Nav, Menu, MenuItem, MenuLink, Logo } from './styled';
import logo from './../../assets/logo.png';


class NavBar extends React.Component {

  render() {
    return <>
      <Nav>
        <Menu>
          <MenuItem>
            <MenuLink to="/clientescadastrados">Clientes</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/"><Logo src={logo} alt="Logo" /></MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/produtoscadastrados">Produtos</MenuLink>
          </MenuItem>
        </Menu>
      </Nav>
    </>;
  }
}

export default NavBar;