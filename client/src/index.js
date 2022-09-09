import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewProduct from "./components/NewProduct/NewProduct";
import GetProductList from "./components/Product/ProductList";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductUpdate from "./components/ProductUpdate/ProductUpdate"
import ProductDetail from "./components/ProductDetail/ProductDetail"
import Cart from "./components/Cart/Cart"
import Register from "./components/Login/Register.jsx"
import Login from "./components/Login/Login.jsx"
// import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./Animated";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Router basename="/">
      <AnimatedPage>
        <Routes>
          <Route exact={true} path="/" element={<LandingPage />} />
          <Route
            exact={true}
            path="/listproduct"
            element={<GetProductList />}
          />
          <Route exact={true} path="/newproduct" element={<NewProduct />} />
          <Route exact={true} path="/register" element={<Register />} />
          <Route exact={true} path="/login" element={<Login />} />
          <Route exact={true} path="/search" element={<ProductDetail />} />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path="/productdetail/:id" element={<ProductUpdate />} />
        </Routes>
      </AnimatedPage>
    </Router>
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
