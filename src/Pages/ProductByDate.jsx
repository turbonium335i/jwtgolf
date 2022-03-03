import React from "react";
import { BsSearch } from "react-icons/bs";
import {
  Table,
  Card,
  Button,
  Col,
  Row,
  CardGroup,
  Carousel,
} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductByDate = ({
  queryDate,
  rentDate,
  items,
  onAdd,
  mstat,
  messageback,
}) => {
  var groupOne = items.slice(0, 3);
  const itemdate = [32, 33, 16, 40];
  const result = itemdate.filter(checkAdult);
  console.log(result);

  function checkAdult(age) {
    return age >= 18;
  }

  let [RoundDate, setRoundDate] = useState(queryDate);

  let addToCart = async (id, title) => {
    console.log("addtocart ", id);
    onAdd(id);
    mstat(title);
    messageback(title + " added!");

    if (1 === 1) {
      fetch(`https://pertinacity1.pythonanywhere.com/addtokartapi`, {
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

  function dateSubmit(subdate) {
    rentDate(subdate);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center ">
        {/* <img
          src="https://i.postimg.cc/zftpFhs3/onwearcrop.png"
          height="30"
          width="auto"
        /> */}
        <h6 className="p-2 mb-0">Rounding Date </h6>
        <input
          type="date"
          id="roundate"
          name="roundate"
          className="rounded border-success"
          defaultValue={queryDate}
          onChange={(evt) => {
            setRoundDate(evt.target.value);
          }}
        />{" "}
        <Link to={`/productbydate`}>
          <Button
            variant="outline-success"
            onClick={() => {
              dateSubmit(RoundDate);
            }}
          >
            <BsSearch />
          </Button>
        </Link>{" "}
        <span className="text-danger mt-1 ms-2">{RoundDate}</span>
      </div>
      <div className="container text-center mt-2">
        <Button variant="outline-primary">PXG</Button>{" "}
        <Button variant="outline-primary">GFORE</Button>{" "}
        <Button variant="outline-primary">WAAC</Button>{" "}
        <Button variant="outline-primary">TITLIST</Button>{" "}
        <Button variant="outline-danger">Acc</Button>{" "}
        <Button variant="outline-warning">Top</Button>{" "}
        <Button variant="outline-success">Bottom</Button>
      </div>
      Query by Date:
      <h1>{queryDate}</h1>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th className="col-1">#</th>
            <th className="col-2 text-center">Image</th>
            <th>Product Name</th>
            {/* <th>Description</th> */}
            <th className="col-1">Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td className="text-center">
                <Link to={`/productdetail/${item.id}`}>
                  <img
                    src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
                    height="60vh"
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
              <td>
                {item.size === "s" ? (
                  <Button variant="secondary" size="sm">
                    {item.size}
                  </Button>
                ) : (
                  <Button variant="primary" size="sm">
                    {item.size}
                  </Button>
                )}
              </td>
              <td>{item.rentalprice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductByDate;
