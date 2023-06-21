import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 50) {
        document.querySelector(".nav").classList.add("affix");
        console.log("OK");
      } else {
        document.querySelector(".nav").classList.remove("affix");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <Link to="/">My Zoo</Link>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <Link to="/animals">Animals</Link>
              </li>
              <li>
                <Link to="#">Add Animal</Link>
              </li>
              <li>
                <Link to="#">Login</Link>
              </li>
              <li>
                <Link to="#">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
