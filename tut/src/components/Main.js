import { Link } from "react-router-dom";
function Main() {
  return (
    <div>
      <div>
        <Link to="/login">
          <button> login</button>
        </Link>
      </div>
      <br />
      <div>
        <Link to="/register">
          <button> register</button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
