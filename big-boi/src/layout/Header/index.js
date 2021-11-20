import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles.css";

export const Header = () => {
  const itemCart = useSelector((state) => state.cart.length);

  return (
    <nav className="l-header navbar navbar-expand-lg bg-header text-success navbar-dark bg-dark">
      <NavLink
        to="/list"
        activeClassName="active"
        className="navbar-brand"
        style={{ marginLeft: "1rem" }}
      >
        Boi na porteira
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink to="/list" activeClassName="active" className="nav-link ">
              Listar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add" activeClassName="active" className="nav-link">
              Adicionar
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ml-md-auto">
        <NavLink to="/cart" activeClassName="active" className="nav-item">
          <i
            className="fa fa-shopping-cart fa-3x icon-header"
            aria-hidden="true"
          >
            <span className="fa-counter">{itemCart}</span>
          </i>
        </NavLink>
      </ul>
    </nav>
  );
};
