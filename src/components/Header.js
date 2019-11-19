import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Alaine-Despesas</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Painel</NavLink>
    <NavLink to="/create" activeClassName="is-active">Criar Despesa</NavLink>
  </header>
);

export default Header;
