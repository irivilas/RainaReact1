import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { FirebaseContextProvider } from "./context/FirebaseContext";
import { CartContextProvider } from "./context/CartContext";
import { Products } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <FirebaseContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </FirebaseContextProvider>
    </BrowserRouter>
  );
};

export default App;
