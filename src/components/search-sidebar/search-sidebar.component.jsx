import { foodTypes } from '../../utils/food-types.utils';
import './search-sidebar.styles.scss';

function SearchSidebar({ onChangeHandler, onClickHandler }) {
  return (
    <div className="search-sidebar-container">
      <input
        onChange={onChangeHandler}
        className="search-input form-control"
        type="text"
        placeholder="Search for a restaurant"
      />
      <div className="search-bar">
        {foodTypes.map((foodType) => (
          <button
            className="btn btn-primary button"
            key={foodType}
            onClick={() => onClickHandler(foodType)}
          >
            {foodType}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchSidebar;
