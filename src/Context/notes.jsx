import React from "react";
import { Button } from "react-bootstrap";

for (let i = 0; i < data.length; i++) {
  if (data[i].id == 2) {
    setHistory(data[i]);
  }
}

const ProductDetail = ({ itemNum }) => {
  return (
    <div className="container bg-light mb-3">
      ProductDetail {itemNum}
      <div className="row">
        <div className="col-md-8 border border-dark text-center pb-2">
          {" "}
          <img
            src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
            className="img-fluid py-2"
          />
        </div>
        <div className="col-md-4 border border-dark pb-2">
          <h1>Product Tile</h1>
          <h2>prodcut siojsdf</h2>
          <h6>jaskldfjoaifjaiosdfjasdfi</h6>
          <h6>jaskldfjoaifjaiosdfjasdfi</h6>
          <h6>jaskldfjoaifjaiosdfjasdfi</h6>
          <h6>300.00</h6>
          <br />
          <Button variant="primary" size="lg">
            Large button
          </Button>{" "}
          <Button variant="secondary" size="lg">
            Large button
          </Button>
        </div>
      </div>
      <br />
      <div> recommending with</div>
      <div className="row border border-light pb-2">
        <div className="col-4">
          {" "}
          <img
            src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
            className="img-fluid py-2"
          />
        </div>
        <div className="col-4">
          {" "}
          <img
            src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
            className="img-fluid py-2"
          />
        </div>
        <div className="col-4">
          {" "}
          <img
            src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
            className="img-fluid py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
