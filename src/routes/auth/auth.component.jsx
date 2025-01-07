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
  const { currentUser, setCurrentUser, signOut } = useContext(UserContext);

  const handleBack = () => {
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInUser(email, password);
      setCurrentUser(user);
      setFormFields(defaultFormFields);
      navigate('/restaurants');
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="auth-container">
      <div className="sign-in-container row d-flex justify-content-center">
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
          {currentUser && (
            <button className="btn btn-success signout" onClick={handleSignOut}>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;