import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../storage/UserContext";
import { logOut } from "../service/usersService";

const Header = () => {
  const { loggedIn, logOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 50) {
        document.querySelector(".nav").classList.add("affix");
      } else {
        document.querySelector(".nav").classList.remove("affix");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = () => {
    const shouldLogOut = window.confirm("Are you sure?");
    if (shouldLogOut) {
      logOut().then(({ data }) => {
        logOutUser(data);
        navigate("/login");
      });
    }
  };

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <Link to="/">My Zoo</Link>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              {loggedIn ? (
                <>
                  <li>
                    <Link to="/animals">Animals</Link>
                  </li>
                  <li>
                    <Link to="/add">Add Animal</Link>
                  </li>
                  <li>
                    <button
                      className="btn btn-outline-danger"
                      type="submit"
                      onClick={() => handleLogOut()}
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/animals">Animals</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
