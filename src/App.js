import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  ProgressBar,
  Table,
  Alert,
} from "react-bootstrap";

import {
  BsFillCartFill,
  BsSearch,
  BsPersonCircle,
  BsInstagram,
  BsEasel,
} from "react-icons/bs";

import Home from "./Pages/Home";
import Private from "./Pages/Private";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import PrivateRoute from "./Utils/PrivateRoute";

function App() {
  const [kartCount, setkartCount] = useState(0);

  var kart = [2, 3, 4];

  // useEffect(() => {
  //   // set kart items after check orders

  //   setkartCount(0);
  // }, []);

  const onAdd = (id) => {
    setkartCount(kartCount + 1);
    // kart.push(id);
    // console.log(kart);
    const kartItem = { id };
    // setkartCount([...kartCount, kartItem].length);
  };

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Link to="/" className="text-decoration-none">
              <Navbar.Brand>
                <img
                  src="https://i.postimg.cc/zftpFhs3/onwearcrop.png"
                  height="30"
                  width="auto"
                  className="d-inline-block align-top"
                />
                {/* <span className="text-warning ">OnWear</span>Shop */}
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="text-decoration-none nav-link">
                  {" "}
                  Home
                </Link>
                <Link to="/login" className="text-decoration-none nav-link">
                  {" "}
                  Login
                </Link>
                <Link to="/private" className="text-decoration-none nav-link">
                  {" "}
                  Private
                </Link>
                <Link to="/products" className="text-decoration-none nav-link">
                  {" "}
                  products
                </Link>
                <Link to="/cart" className="text-decoration-none nav-link">
                  {" "}
                  Cart
                </Link>
              </Nav>
              <span className="text-warning">
                <BsPersonCircle />
              </span>
              &nbsp; <span className="text-warning">Guest &nbsp;</span>
              <BsFillCartFill className="text-light" />
              &nbsp;
              <span className="text-light"> {kartCount} Items</span>&nbsp;
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <div className="text-center">
          {" "}
          {/* <img
            src="https://i.postimg.cc/MpC5Wy7k/ogp.png"
            style={{
              height: "25vh",
              width: "auto",
            }}
          /> */}
        </div>

        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Products onAdd={onAdd} />} />
            <Route path="cart" element={<Cart />} />

            <Route element={<PrivateRoute />}>
              <Route path="private" element={<Private />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
document.body.style = "background: black;";
