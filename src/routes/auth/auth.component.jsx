import './auth.styles.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { signInUser } from '../../utils/firebase.utils';

function Auth() {
  const defaultFormFields = {
    email: '',
    password: '',
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

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
    setCurrentUser(currentUser);
    console.log('User is' + currentUser);
    setFormFields(defaultFormFields);
  };

  const handleSignOut = () => {
    // signOutUser();
  };

  const handleTest = () => {
    console.log(currentUser);
  };

  return (
    <div className="auth-container">
      <div className=" sign-in-container row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <form onSubmit={handleSubmit} className="form-field">
            <br />
            <input
              onChange={handleChange}
              className="form-card form-control"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
            />
            <br />
            <input
              onChange={handleChange}
              className="form-card form-control"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
            />
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
          <button onClick={handleTest}>Test</button>

          {/* {user ? (
            <div>
              <h4>Test</h4>
            </div>
          ) : (
            <p>Please sign in to see the special button.</p>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Auth;
