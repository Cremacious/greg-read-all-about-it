import { foodTypes } from '../../utils/food-types.utils';
import './search-sidebar.styles.scss';

function SearchSidebar() {
  return (
    <div className="search-sidebar-container">
      <input
        className="search-input form-control"
        type="text"
        placeholder="Search for a restaurant"
      />
      <div className="search-bar">
        {foodTypes.map((foodType) => (
          <button className="btn btn-primary button" key={foodType}>
            {foodType}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchSidebar;
