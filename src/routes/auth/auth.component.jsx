import './auth.styles.scss';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { signInUser, signOutUser } from '../../utils/firebase.utils';

function Auth() {
  const defaultFormFields = {
    email: '',
    password: '',
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInUser(email, password);
    setFormFields(defaultFormFields);
  };

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <div className="auth-container">
      <div className=" sign-in-container row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <form onSubmit={handleSubmit} className="form-field">
            <label>
              Email:
              <input
                onChange={handleChange}
                className="form-card form-control"
                type="email"
                name="email"
                value={email}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                onChange={handleChange}
                className="form-card form-control"
                type="password"
                name="password"
                value={password}
              />
            </label>
            <br />
            <button className="btn btn-success" type="submit">
              Sign In
            </button>
          </form>
          <button className="btn btn-success" onClick={handleBack}>
            Not Greg?
          </button>
          <button className="btn btn-success signout" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
