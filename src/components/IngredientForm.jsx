import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';
import Form from '../theme/formStyle';

const IngredientForm = () => {
  const [formData, setFormData] = useState({
    name : "", type: "", unit:""
  });
  const [toProductList, setToProductList] = useState(false)

  if (toDashboard === true) {
    return <Navigate to='/ingredients'/>
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/ingredients', formData)
    .then(res => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    setToProductList(true)
    if (toProductList === true) {
      return <Navigate to='/ingredients'/>
    }
  }

  return (
    <div>
      <Container>
        <h1>
          Ajouter un <br></br>nouveau produit
        </h1>
      </Container>
      <Form>
        <label htmlFor="name">
          Nom du produit :
          <input onChange={e => (setFormData({...formData, name: e.target.value}))} value={formData.name} type="text"/>
        </label>
        <label htmlFor="type">
          Type de produit :
          <select onChange={e => (setFormData({...formData, type: e.target.value}))} value={formData.type} type="text">
            <option defaultValue="">-</option>
            <option value="Fruits et Légumes">Fruits et Légumes</option>
            <option value="Viandes et Poissons">Viandes et Poissons</option>
            <option value="Charcuterie et Traiteur">Charcuterie et Traiteur</option>
            <option value="Pain et Patisserie">Pain et Patisserie</option>
            <option value="Produits frais et laitiers">Produits frais et laitiers</option>
            <option value="Surgelés">Surgelés</option>
            <option value="Epicerie sucrée">Epicerie sucrée</option>
            <option value="Epicerie salée">Epicerie salée</option>
            <option value="Boissons">Boissons</option>
            <option value="Bébés">Bébés</option>
            <option value="Animaux">Animaux</option>
            <option value="Hygiène et beauté">Hygiène et beauté</option>
            <option value="Entretien et nettoyage">Entretien et nettoyage</option>
            <option value="Fournitures">Fournitures</option>
          </select>
        </label>
        <label htmlFor="unit">
          Valeur :
          <select onChange={e => (setFormData({...formData, unit: e.target.value}))} value={formData.unit} type="text">
            <option defaultValue="">-</option>
            <option value="Kilogramme">Kilogramme</option>
            <option value="Litre">Litre</option>
            <option value="A l'unité">A l'unité</option>
          </select>
        </label>
      </Form>
      <ButtonContainer>
        <Link to="/ingredients">
          <button type="button">Retour</button>
        </Link>
        <Link to="/ingredients">
          <button type="submit" onClick={handleSubmit}>Ajouter</button>
        </Link>
      </ButtonContainer>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default IngredientForm;
