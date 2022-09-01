import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import store from "./store/index";
import Detail from "./Components/Detail";
import Products from './Components/Products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/details/:id" element={<Detail />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
