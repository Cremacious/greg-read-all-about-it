import { Link, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <p>Navigation</p>
      <Link to="/"> Home</Link>
      <Link to="/sign-in"> Sign In </Link>
      <Link to="/restaurants"> View Restaurants </Link>
      <Link to="/restaurant-form"> Add Restaurant </Link>
      <Outlet />
    </div>
  );
}

export default Navigation;
