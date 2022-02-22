import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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

import PrivateRoute from "./Utils/PrivateRoute";

import Home from "./Pages/Home";
import Private from "./Pages/Private";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import KartNavbar from "./Components/KartNavbar";
import UserID from "./Components/UserID";

function App() {
  const [kartCount, setkartCount] = useState(0);
  const [kart, setkart] = useState([5, 6]);

  let [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
    setkartCount(kart.length);
    Aos.init({ duration: 1000 });
  }, []);

  let getItems = async () => {
    let response = await fetch("http://127.0.0.1:8000/itemapi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setItems(data);
    } else if (response.statusText === "Unauthorized") {
      console.log("200 error");
    }
  };

  const onAdd = (id) => {
    const newkartItem = { id };
    setkart([...kart, newkartItem.id]);
    // [...new Set(kart)]
    setkartCount(kart.length + 1);
    // console.log(kart);
  };

  const onDelete = (id) => {
    console.log(kart, id);
    setkart(kart.filter((k) => k !== id));
  };

  return (
    <Router>
      <AuthProvider>
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
                    data-aos="fade-up"
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
                  <Link
                    to="/products"
                    className="text-decoration-none nav-link"
                  >
                    {" "}
                    products
                  </Link>
                  <Link to="/cart" className="text-decoration-none nav-link">
                    {" "}
                    Cart
                  </Link>
                  <Link to="/signup" className="text-decoration-none nav-link">
                    {" "}
                    SignUp
                  </Link>
                </Nav>
                <span className="text-warning">
                  <BsPersonCircle />
                </span>
                &nbsp;{" "}
                <span className="text-warning">
                  <UserID /> &nbsp;
                </span>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <BsFillCartFill className="text-light" />

                  <span className="text-light">
                    {" "}
                    <KartNavbar kart={kart} /> Items
                  </span>
                </Link>
                &nbsp;
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

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route
              path="products"
              element={<Products onAdd={onAdd} items={items} />}
            />
            <Route path="productdetail/:id" element={<ProductDetail />} />
            <Route
              path="cart"
              element={<Cart kart={kart} items={items} onDelete={onDelete} />}
            />

            <Route element={<PrivateRoute />}>
              <Route path="private" element={<Private />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
document.body.style = "background: white;";
