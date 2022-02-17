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
import logo from "../logo.svg";
import "../App.css";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  let { user, logoutUser, authTokens } = useContext(AuthContext);
  let [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  let getItems = async () => {
    let response = await fetch("http://127.0.0.1:8000/itemapi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setItems(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <div>
      <div className="container border border-dark">
        Home Page, <span className="text-warning">200K</span>
        <img src={logo} className="App-logo" alt="logo" />
        {user && <p className="text-info">user: {user.username}</p>}
        {user ? (
          <p
            onClick={logoutUser}
            style={{ cursor: "pointer", color: "orange" }}
          >
            LogOut
          </p>
        ) : (
          <Link to="/login" className="text-decoration-none  text-info">
            Login
          </Link>
        )}
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
