import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ProductDetail = ({ itemNum, onAdd, mstat, messageback }) => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  let addToCart = async (id, title) => {
    console.log("addtocart ", id);
    onAdd(id);

    messageback(title + " added!");
    mstat(title);

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

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(
        `http://127.0.0.1:8000/itemapidetail/${params.id}`
      );
      const data = await res.json();

      if (res.status === 404) {
        navigate("/");
      }

      setTask(data);
      setLoading(false);
      console.log(data);
    };
    fetchTask();
  }, []);

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
          <h1>{task.title}</h1>
          <h6>
            {task.modelname} / id: {task.id}
          </h6>
          <h6>{task.description_long}</h6>
          <h6>{task.description_short}</h6>
          <h6>{task.price}</h6>
          <h6>{task.rentalprice}</h6>
          <br />
          <Button variant="secondary" size="lg">
            Save
          </Button>{" "}
          <Button
            variant="primary"
            size="lg"
            onClick={() => addToCart(task.id, task.title)}
          >
            Add to Cart
          </Button>
          <br />
          <br />
          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => {
              navigate(-1);
            }}
          >
            <BsFillArrowLeftCircleFill /> Back
          </Button>
        </div>
      </div>
      <br />
      <div> recommending with</div>
      <div className="row border border-light pb-2">
        <div className="col-4">
          {" "}
          <Link to={`/productdetail/${task.id}`}>
            <img src={task.imglink} className="img-fluid py-2" />
          </Link>
        </div>
        <div className="col-4">
          {" "}
          <img
            src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
            className="img-fluid py-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/productdetail/1";
            }}
          />{" "}
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
