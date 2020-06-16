import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between mb-4">
      <div className="container">
        <h1>
          <Link className="text-light" to={"/"}>
            CRUD - React, Redux, REST API & Axios
          </Link>
        </h1>
        <Link
          className="btn btn-danger nuevo-post d-block d-md-inline-block"
          to={"/products/new"}
        >
          Agregar Producto &#43;
        </Link>
      </div>
    </nav>
  );
};

export default Header;
