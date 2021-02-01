import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

const SignIn = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="auth">
      <Helmet>
        <title>Unicorn Estate -- login</title>
      </Helmet>
      <h1 className="auth__title">Sign In</h1>
      <p className="auth__lead">Sign in to your account</p>

      <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth__form__group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => onChange(e)}
            required
            className="auth__form__input"
          />
        </div>
        <div className="auth__form__group">
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => onChange(e)}
            required
            className="auth__form__input"
          />
        </div>
        <button className="auth__form__button" type="submit">
          Log in
        </button>
      </form>
      <p className="auth__authtext">
        Don't have an account?{" "}
        <Link className="auth__authtext__link" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(SignIn);
