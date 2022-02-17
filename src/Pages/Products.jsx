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
  Card,
  Button,
  CardGroup,
} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";

const Products = ({ onAdd }) => {
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

  var groupOne = items.slice(0, 3);

  let addToCart = async (id) => {
    console.log("addtocart ", id);
    onAdd(id);

    if (1 === 1) {
      fetch(`http://127.0.0.1:8000/addtokartapi`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          id: id,
          user: "username here",
          action: "add",
        }),
      });
    }
  };

  return (
    <div className="container bg-dark text-warning">
      Products
      <CardGroup>
        {groupOne.map((item) => (
          <Card style={{ width: "18rem" }} key={item.id}>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
            />
            <Card.Body className="bg-dark">
              <Card.Title>{item.title} </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary" onClick={() => addToCart(item.id)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <br />
      <CardGroup>
        {items.map((item) => (
          <Card style={{ width: "18rem" }} key={item.id}>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
            />
            <Card.Body className="bg-dark">
              <Card.Title>{item.title} </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary" onClick={() => addToCart(item.id)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <br />
    </div>
  );
};

export default Products;
