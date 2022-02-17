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
  Button,
} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";

const Cart = () => {
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
    <div className="container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="col-1">#</th>
            <th className="col-2">Image</th>
            <th>Product Name</th>
            {/* <th>Description</th> */}
            <th className="col-1">Size</th>
            <th>Price</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
                  height="55"
                  width="auto"
                />
              </td>
              <td>
                {item.title} <br />{" "}
                <span className="text-secondary">
                  {" "}
                  {item.description_short}
                </span>
              </td>
              {/* <td>{item.description_short}</td> */}
              <td>{item.size}</td>
              <td>{item.rentalprice}</td>
              <td>
                <Button variant="outline-light" size="sm">
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary" size="lg">
          Continue Shopping
        </Button>
        <Button variant="success" size="lg">
          CheckOut
        </Button>
      </div>
      <br />
      <div className="text-secondary text-end">
        <h5>SubTotal: 000,000</h5>
        <h5>Shipping: 000,000</h5>
        <h3>Total: 000,000</h3>
      </div>
    </div>
  );
};

export default Cart;
