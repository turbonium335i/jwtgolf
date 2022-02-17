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

const Private = () => {
  return (
    <div>
      <div className="container border border-warning text-warning">
        Private
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
};

export default Private;
