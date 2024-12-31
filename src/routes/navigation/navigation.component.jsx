import { Link, Outlet, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleForward = () => {
    navigate(1);
  };

  return (
    <div className="navigation-container">
      <button className="btn back-button" onClick={handleBack}>
        Back
      </button>
      <button className="btn next-button" onClick={handleForward}>
        Forward
      </button>
      <Outlet />
    </div>
  );
}

export default Navigation;
