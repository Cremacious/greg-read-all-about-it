import { Link, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <h3>Navigation</h3>
      <ol>
        <Link to="/sign-in">Sign In</Link>
      </ol>
      <Outlet />
    </div>
  );
}

export default Navigation;
