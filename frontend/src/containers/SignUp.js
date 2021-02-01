import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signup } from "../actions/auth";
import setAlert from "../actions/alert";

function SignUp({ signup, setAlert, isAuthenticated }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) setAlert();
    else signup(name, email, password, password2);
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="auth">
      <Helmet>
        <title>Unicorn Estate -- Sign Up</title>
      </Helmet>
      <h1 className="auth__title">Sign Up</h1>
      <p className="auth__lead">Sign Up to your account</p>

      <form className="auth__form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth__form__group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => onChange(e)}
            required
            className="auth__form__input"
          />
        </div>
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
            minLength="6"
            className="auth__form__input"
          />
        </div>
        <div className="auth__form__group">
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder="Confirm Password"
            onChange={(e) => onChange(e)}
            required
            minLength="6"
            className="auth__form__input"
          />
        </div>

        <button className="auth__form__button" type="submit">
          Sign Up
        </button>
      </form>
      <p className="auth__authtext">
        Already have an account?{" "}
        <Link className="auth__authtext__link" to="/signup">
          Register
        </Link>
      </p>
    </div>
  );
}

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup, setAlert })(SignUp);
