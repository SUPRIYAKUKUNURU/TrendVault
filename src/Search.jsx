import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Search = () => {
  
  return (
    <div className="container mt-3 d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: "#EEEEEE" }}>
      {/* Search Bar */}
      <div className="input-group" style={{ maxWidth: "500px" }}>
        <input type="text" className="form-control border-0" placeholder="Search your products here" style={{ boxShadow: "none" }} />
        <span className="input-group-text bg-white border-0">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>

      {/* User and Cart Icons */}
      <div className="d-flex gap-4">
        <FontAwesomeIcon icon={faUser} size="lg" />
        <Link style={{color:"black"}} to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </Link>
      </div>

    </div>
  );
};

export default Search;
