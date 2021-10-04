import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="">
      <p>ZakkFast &copy;</p>
      {location.pathname === "/" && <Link to="/about">About</Link>}
      {location.pathname === "/about" && <Link to="/">Go Back</Link>}
    </footer>
  );
};

export default Footer;
