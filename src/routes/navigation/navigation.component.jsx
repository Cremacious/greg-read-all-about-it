import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

function Navigation() {
  return (
    <Fragment>
      <h2>Nav Menu</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
