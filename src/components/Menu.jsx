import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = () => {
  const [homeLink, setHomeLink] = useState(true);
  const [ingredientsLink, setIngredientsLink] = useState(false);
  const [userLink, setUserLink] = useState(false);

  const handleHomeLinkClick = () => {
    setHomeLink(true);
    setIngredientsLink(false);
    setUserLink(false);
  };

  const handleIngredientLinkClick = () => {
    setHomeLink(false);
    setIngredientsLink(true);
    setUserLink(false);
  };

  const handleUserLinkClick = () => {
    setHomeLink(false);
    setIngredientsLink(false);
    setUserLink(true);
  };

  return (
    <Nav>
      {homeLink ? (
        <ActiveNavElement>
          <Link to="/">
            <img src="ressources/check-list-white.png" alt="Check list logo" />
          </Link>
        </ActiveNavElement>
      ) : (
        <UnactiveNavElement onClick={handleHomeLinkClick}>
          <Link to="/">
            <img src="ressources/check-list-white.png" alt="Check list logo" />
          </Link>
        </UnactiveNavElement>
      )}
      {ingredientsLink ? (
        <ActiveNavElement>
          <Link to="/ingredients">
            <img src="ressources/basket-white.png" alt="Basket logo" />
          </Link>
        </ActiveNavElement>
      ) : (
        <UnactiveNavElement onClick={handleIngredientLinkClick}>
          <Link to="/ingredients">
            <img src="ressources/basket-white.png" alt="Basket logo" />
          </Link>
        </UnactiveNavElement>
      )}
      {/* {userLink ? (
        <ActiveNavElement>
          <Link to="/user">
            <img src="ressources/user-white.png" alt="User logo" />
          </Link>
        </ActiveNavElement>
      ) : (
        <UnactiveNavElement onClick={handleUserLinkClick}>
          <Link to="/user">
            <img src="ressources/user-white.png" alt="User logo" />
          </Link>
        </UnactiveNavElement>
      )} */}
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 1rem 0;
  border-top: 1px solid #78566d;
  position: absolute;
  bottom: 0;
`;

const ActiveNavElement = styled.div`
  display: flex;
  opacity: 1;

  img {
    width: 30%;
  }
`;

const UnactiveNavElement = styled.div`
  display: flex;
  opacity: 0.45;

  img {
    width: 30%;
  }

  &:hover {
    opacity: 1;
  }
`;

export default Menu;
