import { useContext, useEffect, useState } from "react";
import UserContext from "../storage/UserContext";
import { logIn } from "../service/usersService";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { logInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.querySelector(".nav").classList.add("affix");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn(user.email, user.password).then(({ data }) => {
      logInUser(data);
      localStorage.setItem("access_token", data.authorisation.token);
      navigate("/");
    });

    setUser({
      email: "",
      password: "",
    });
  };

  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div
              className="card"
              style={{
                borderRadius: "1rem",
                marginTop: "100px",
                opacity: "90%",
              }}
            >
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://www.pragueunlocked.eu/wp-content/uploads/2020/07/slon-indicky-img-0467-miroslav-bobek-scaled.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{
                      borderRadius: "1rem 0 0 1rem",
                      height: "-webkit-fill-available",
                    }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">My Zoo</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Login
                      </h5>

                      <div className="form-floating mb-4">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          name="email"
                          onChange={handelInputChange}
                          value={user.email}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          name="password"
                          onChange={handelInputChange}
                          value={user.password}
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?
                        <Link to="/register" style={{ color: "#393f81" }}>
                          Register here
                        </Link>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
