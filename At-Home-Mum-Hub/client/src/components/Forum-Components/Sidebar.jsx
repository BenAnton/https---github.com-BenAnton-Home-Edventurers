/* eslint-disable react/prop-types */
import "../Forum-Components/SideBar.css";

function SideBar({ testCategories, onSelectedCategory }) {
  return (
    <div className="sidebar-cont">
      <ul className="category-list">
        {testCategories.map((category, index) => (
          <li
            key={index}
            className="sidebar-cats"
            onClick={() => onSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
