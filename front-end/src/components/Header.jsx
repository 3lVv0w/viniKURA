import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from 'img/logo.jpg';

const Container = styled.div`
  background: #ffcc66;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 50px;
`;
const NavItem = styled(Link)`
  padding: 0 5px 0 5px;
  display: inline-block;
  text-decoration: none;
  color: white;
`;

const Header = () => (
  <Container>
    <Link to="/">
      <Logo src={logo} />
    </Link>
    <div>
      <NavItem to="/items">Items</NavItem>
      <NavItem to="/info">Info</NavItem>
      <NavItem to="/login">Login</NavItem>
    </div>
  </Container>
);

export default Header;
