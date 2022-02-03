import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import Ingredients from "./components/Ingredients";
import User from "./components/User";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ShoppingList />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Menu />
      </Router>
    </div>
  );
}

export default App;
