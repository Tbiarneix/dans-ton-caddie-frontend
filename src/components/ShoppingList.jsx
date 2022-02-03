import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import CircleList from "./CircleList";

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/1/lists")
      .then(res => res.data)
      .then(data => setShoppingList(data.payload))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <h1>Liste de course</h1>
      </Container>
      <ProductContainer>
        {shoppingList.map((product) => (
          <CircleList name={product.ingredient.name} id={product.ingredient.id} key={product.ingredient.id} />
        ))}
      </ProductContainer>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 2rem;
`;

export default ShoppingList;
