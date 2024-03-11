import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginHandler, token } = useAuthContext();
  const [loginCredential, setLoginCredential] = useState({ username: "", password: "" });

  useEffect(() => {
    let id;
    if (token) {
      id = setTimeout(() => {
        navigate(location?.state?.from?.pathname ?? "/");
      }, 1000);
    }

    return () => {
      clearTimeout(id); // Use clearTimeout instead of clearInterval for setTimeout
    };
  }, [token, navigate, location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(loginCredential);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredential((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div className="container-fluid bg-main">
      <div className="container">
        <div className="row main-container align-items-center justify-content-center">
          <div className="col-lg-6 p-2 py-4 rounded bg-light">
            <h2 className="h2 fw-bold">Login form</h2>
            <p>
              Not a user? <Link to="/signup">Create an account</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label htmlFor="username" className="h6">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={loginCredential.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="password" className="h6">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={loginCredential.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <button type="submit" className="btn btn-primary w-25 rounded-0">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
