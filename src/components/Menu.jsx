import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = () => (
  <Nav>
    <Link to='/'>
      <img src="ressources/check-list-grey.png" alt="Check list logo" />
    </Link>
    <Link to='/'>
      <img src="ressources/basket-grey.png" alt="Basket logo" />
    </Link>
    <Link to='/'>
      <img src="ressources/user-grey.png" alt="User logo" />
    </Link>
  </Nav>
);

const Nav = styled.div`
  
`;

export default Menu;