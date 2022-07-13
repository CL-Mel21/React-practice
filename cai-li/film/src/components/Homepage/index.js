import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <Link to="/films">Film Library</Link>
    </>
  );
};

export default Homepage;
