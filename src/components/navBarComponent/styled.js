import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
  width: 80px;
`;

export const Nav = styled.nav` 
  font-size: 22pt;
  align-items: center;
  top: 0;
  height:auto;
  padding-left: calc(50% - 200px);
  width:100;
  background-color: #272d3d;
  @media (max-width: 900px) {
    height:auto;
    width:100%;
    font-size: auto;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #272d3d;
`;

export const MenuItem = styled.li`
  float: left;
`;
export const MenuLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  justify-items:center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #4272e2;
  }
  &:active {
    color: #4272e2;
`;