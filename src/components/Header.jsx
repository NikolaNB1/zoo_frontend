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
            <Link to="/">Your Logo</Link>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <Link href="#">Animals</Link>
              </li>
              <li>
                <Link href="#">Add Animal</Link>
              </li>
              <li>
                <Link href="#">Login</Link>
              </li>
              <li>
                <Link href="#">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
