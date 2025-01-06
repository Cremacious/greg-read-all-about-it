import './auth.styles.scss';

import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleSubmit = (event) => {};

  return (
    <div>
      <div className=" sign-in-container row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <form onSubmit={handleSubmit} className="form-field">
            <label>
              Email:
              <input
                className="form-card form-control"
                type="email"
                name="email"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                className="form-card form-control"
                type="password"
                name="password"
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
        </div>
      </div>
    </div>
  );
}

export default Auth;
