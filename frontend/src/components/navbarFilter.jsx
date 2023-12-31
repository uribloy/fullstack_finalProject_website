import useProducts from "../hooks/useProducts";
import { useState } from "react";
const NavbarFilter = ({ onCategoryFilter, onSearchFilter }) => {
  const [category, setCategory] = useState("all");
  const data = useProducts();
  const categories = ["all", ...new Set(data.map((p) => p.category))];

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    onCategoryFilter(value);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    onSearchFilter(value);
  };

  const btnsFilterByCategory = categories.map((category, index) => {
    return (
      <button
        className="btn btn-light btnCategory m-1"
        key={index}
        value={category}
        onClick={handleCategoryChange}
      >
        {category}
      </button>
    );
  });

  return (
    <>
      <div>{btnsFilterByCategory}</div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
      </div>
    </>
  );
};
export default NavbarFilter;
