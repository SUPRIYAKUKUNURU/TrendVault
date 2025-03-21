import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Pass search term to parent component (Shop)
  };

  return (
    <div className="container mt-3 d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="input-group" style={{ maxWidth: "500px" }}>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search your products here"
          style={{ boxShadow: "none" }}
          value={searchTerm}
          onChange={handleSearchChange} // Call the function on input change
        />
        <span className="input-group-text bg-white border-0">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
      <div className="d-flex gap-4">
        <FontAwesomeIcon icon={faUser} size="lg" />
        <Link style={{ color: "black" }} to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </Link>
      </div>
    </div>
  );
};

export default Search;
