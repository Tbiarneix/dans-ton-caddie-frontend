import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import Loader from "./components/Loader";
import ShoppingList from "./components/ShoppingList";
import Ingredients from "./components/Ingredients";
import IngredientForm from "./components/IngredientForm";
import User from "./components/User";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div>
      <GlobalStyle />
      {loader ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<ShoppingList />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/ingredient-form" element={<IngredientForm />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Menu />
        </Router>
      )}
    </div>
  );
}

export default App;
