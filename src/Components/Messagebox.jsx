import { Alert } from "react-bootstrap";

const Messagebox = ({ mstat, messageInfo }) => {
  if (messageInfo.includes("Error")) {
    return (
      <div>
        <Alert
          variant={"danger"}
          dismissible={true}
          className="rounded-0 "
          onClick={() => mstat(false)}
        >
          {messageInfo}
        </Alert>
      </div>
    );
  } else {
    return (
      <div>
        <Alert
          variant={"success"}
          dismissible={true}
          className="rounded-0 "
          onClick={() => mstat(false)}
        >
          {messageInfo}
        </Alert>
      </div>
    );
  }
};

export default Messagebox;
