import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search"; // Import the Search component
import "bootstrap/dist/css/bootstrap.min.css";

// Import Product Images
import spfThree from "./assets/spfThree.webp";
import spfFour from "./assets/spfFour.webp";
import bestSellerTwo from "./assets/bestSellerTwo.webp";
import bestSellerThree from "./assets/bestSellerThree.webp";
import newArrThree from "./assets/newArrThree.webp";

// Product Data
export const products = [
  { _id: 1006, img: bestSellerTwo, productName: "New Backpack", price: "180.00", color: "Gray", badge: false },
  { _id: 1007, img: bestSellerThree, productName: "Household materials", price: "25.00", color: "Mixed", badge: true },
  { _id: 1042, img: newArrThree, productName: "Cloth Basket", price: "80.00", color: "Mixed", badge: true },
  { _id: 1043, img: spfThree, productName: "Headphones", price: "25.00", color: "Mixed", badge: true },
  { _id: 1044, img: spfFour, productName: "Sun Glasses", price: "220.00", color: "Black", badge: true },
];

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const productsPerPage = 6;

  // Filtered Products based on Search
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item._id === product._id);
      let updatedCart;

      if (existingItemIndex !== -1) {
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });

    alert(`${product.productName} added to cart!`);
  };

  return (
    <div className="container">
      {/* Include the Search Component */}
      <Search onSearch={setSearchTerm} />

      <h2 className="text-center my-4">Welcome to Our Shop</h2>

      {/* Product Cards */}
      <div className="row">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div key={product._id} className="col-md-4 mb-4">
              <div className="card">
                <Link to={`/product/${product._id}`} state={{ product }}>
                  <img src={product.img} className="card-img-top" alt={product.productName} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <button onClick={() => addToCart(product)} className="btn btn-dark">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center">No products found</h4>
        )}
      </div>

      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <nav>
          <ul className="pagination justify-content-center">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className="page-link"
                  disabled={currentPage === index + 1}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Cart Link */}
      <div className="text-center mt-4">
        <Link to="/cart" className="btn btn-primary">
          Go to Cart ({cart.length})
        </Link>
      </div>
    </div>
  );
};

export default Shop;
