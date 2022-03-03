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

var now = new Date();
var daycheck = now.getDate();
if (String(daycheck).length < 2) {
  daycheck = "0" + daycheck;
}

var mocheck = now.getMonth();
if (String(mocheck).length < 2) {
  mocheck = "0" + (mocheck + 1);
}

var today = now.getFullYear() + "-" + mocheck + "-" + daycheck;

const Landing = ({ rentDate }) => {
  let [RoundDate, setRoundDate] = useState(today);

  function dateSubmit(subdate) {
    rentDate(subdate);
  }

  return (
    <div>
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
          className="rounded"
          defaultValue={today}
          onChange={(evt) => {
            setRoundDate(evt.target.value);
          }}
        />{" "}
        <Link to={`/productbydate`}>
          <Button
            variant="outline-primary"
            onClick={() => {
              dateSubmit(RoundDate);
            }}
          >
            <BsSearch />
          </Button>
        </Link>{" "}
        {/* <span className="text-danger mt-1 ms-2">{RoundDate}</span> */}
      </div>

      <div className="container mt-2">
        {" "}
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
            />
            <Card.Body>
              <Card.Title>G FORE</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/DfS1jYhW/pxgwo.jpg"
            />
            <Card.Body>
              <Card.Title>TOPS</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/Pq62ZpW0/titleist.jpg"
            />
            <Card.Body>
              <Card.Title>BOTTOM</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/63GQB83G/callaway.jpg"
            />
            <Card.Body>
              <Card.Title>Accessories</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <br />
      </div>
    </div>
  );
};

export default Landing;
