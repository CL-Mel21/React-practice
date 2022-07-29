import { Link } from "react-router-dom";
import './index.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <Link to="/films" style={{ textDecoration:'none'}}>
        <h1 className="library-entrance">
        Film Library
        </h1>
      </Link>
    </div>
  );
};

export default Homepage;
