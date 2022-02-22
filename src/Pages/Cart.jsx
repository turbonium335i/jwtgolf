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
import { Link } from "react-router-dom";

const Cart = ({ items, kart, onDelete }) => {
  var shopKart = [];

  for (var i = 0; i < items.length; i++) {
    if (kart.includes(items[i].id)) {
      shopKart.push(items[i]);
    }
  }

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
            <th className="col-1">Remove</th>
          </tr>
        </thead>
        <tbody>
          {shopKart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/productdetail/${item.id}`}>
                  <img
                    src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
                    height="55"
                    width="auto"
                  />
                </Link>
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
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => onDelete(item.id)}
                >
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
        <h4>shopkart.id, price, total</h4>
      </div>
    </div>
  );
};

export default Cart;
