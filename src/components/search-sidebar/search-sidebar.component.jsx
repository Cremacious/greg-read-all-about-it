import { foodTypes } from '../../utils/food-types.utils';
import './search-sidebar.styles.scss';

function SearchSidebar({ searchValue, onChangeHandler, onClickHandler }) {
  return (
    <div className="search-sidebar-container">
      <input
        onChange={onChangeHandler}
        className="search-input form-control"
        type="text"
        placeholder="Search"
      />
      <div className="types-container">
        {foodTypes.map((foodType) => (
          <button
            className={`btn btn-success button ${
              searchValue === foodType ? 'selected' : ''
            }`}
            key={foodType}
            onClick={() => onClickHandler(foodType)}
          >
            {foodType} {searchValue === foodType}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchSidebar;
