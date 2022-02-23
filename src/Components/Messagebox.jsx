import { Alert } from "react-bootstrap";

const Messagebox = ({ mstat }) => {
  return (
    <div>
      <Alert
        variant={"success"}
        dismissible={true}
        className="rounded-0 "
        onClick={() => mstat(false)}
      >
        Item Added!
      </Alert>
    </div>
  );
};

export default Messagebox;
