import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Alert from "./Alert";
import PropTypes from "prop-types";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <a href="#!" className="navbar__top__auth__link" onClick={logout}>
      Logout
    </a>
  );

  const guestLinks = (
    <Fragment>
      <Link className="navbar__top__auth__link" to="/login">
        Log in
      </Link>
      <Link className="navbar__top__auth__link" to="/signup">
        Sign up
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <div className="navbar">
        <div className="navbar__top">
          <div className="navbar__top__logo">
            <Link className="navbar__top__logo__link" to="/">
              Unicorn Estate
            </Link>
          </div>
          <div className="navbar__top__auth">
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </div>
        </div>
        <div className="navbar__bottom">
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink
              className="navbar__bottom__item__link"
              exact
              to="/listings"
            >
              Listings
            </NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" exact to="/about">
              About
            </NavLink>
          </li>
          <li className="navbar__bottom__item">
            <NavLink className="navbar__bottom__item__link" exact to="/contact">
              Contact
            </NavLink>
          </li>
        </div>
      </div>
      <Alert />
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
