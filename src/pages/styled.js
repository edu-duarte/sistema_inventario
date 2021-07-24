import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg1 from "./../assets/bg1.png"

export const Content = styled.div`
  width:100%;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-position-x: 150px;
  background-position-y: 110px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContainerHome = styled.div`
  width:100%;
  margin-top: -44%;
  text-align: center;
`;

export const ContainerClientes = styled.div`
  width:100%;
  padding: 40px;
  background-color: #fff;
  border: 2px solid #444;
  border-radius: 8px;
`;

export const ContainerProdutos = styled.div`
  width:100%;
  padding: 40px;
  background-color: #fff;
  border: 2px solid #444;
  border-radius: 8px;
`;

export const Title = styled.h1`
text-align: center;
font-weight: bold;
font-family: sans-serif;
color: #272d3d;
width:100%;
font-size: 16pt;
`;


export const Label = styled.label`
text-align: left;
font-family: sans-serif;
color: #555;
width:100%;
font-size: 14pt;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: .25rem;
  width: 98%;
  margin-bottom:5px;
  font-size: 14pt;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #000;
  height: 3rem;
  width: 800px;
  margin-left: calc(50% - 400px);
  padding: 0 0.5rem;
  border-radius: .25rem;
  background: #375cb3;
  color: #fff;
  font-weight: bold;
  font-size: 14pt;
  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const LinkButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #1c3e86;
  height: 3rem;
  margin-left: calc(50% - 140px);
  width: 100%;
  padding: 12px 30px;
  border-radius: .25rem;
  background: #1c3e86;
  color: #fff;
  font-weight: bold;
  font-size: 14pt;
  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;

export const DeleteButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #1c3e86;
  height: 3rem;
  margin-left: calc(50% - 165px);
  margin-top: 100px;
  width: 100%;
  padding: 12px 30px;
  border-radius: .25rem;
  background: #1c3e86;
  color: #fff;
  font-weight: bold;
  font-size: 14pt;
  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;

export const Table = styled.table`
  font-family: sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size: 14pt;
`;

export const TableTd = styled.td`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  color: #555;
  height: 3rem;
`;

export const TableTr = styled.tr`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  height: 3rem;
  &:nth-child(even){
    background-color: #eee;
  }
`;