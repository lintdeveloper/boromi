// import React, { useState, useEffect } from "react";
import React from "react";
import "./Home.css";
import logo from "../../assets/media/boromi-logo.PNG";
import { Link } from "react-router-dom";

// import UserService from "../../services/user.service";

const Home = () => {
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  return (
    <div id="home">
      <nav className="main-nav_bar container">
      <div className="d-flex justify-content-between">
        <Link to="/">
            <img src={logo} alt="logo" className="logo"></img>
        </Link>
        <ul className="d-flex flex-row-reverse align-items-center nav-links">
          <li className="nav-link">
            <Link to="/register">
              <button type="button" className="btn btn-sm btn-primary">Get Started</button>
            </Link>    
          </li>
          <li className="nav-link">
            <Link to="/login">
              <p className="mb-0">Sign In</p>
            </Link>
          </li>
          <li className="nav-link">For Businesses</li>
          <li className="nav-link">For Individuals</li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Home;