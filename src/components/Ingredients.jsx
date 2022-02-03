import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import CircleProduct from "./CircleProduct";

const Ingredients = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ingredients")
      .then((res) => res.data)
      .then((data) => setProductsList(data.payload))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <h1>Liste de produits</h1>
      </Container>
      <Container>
        <Link to="/ingredient-form">
          <button type="button" style={{width: 300}}>Ajouter un produit</button>
        </Link>
      </Container>
      <ProductContainer>
        {productsList.map((product) => (
          <CircleProduct name={product.name} id={product.id} />
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

export default Ingredients;
