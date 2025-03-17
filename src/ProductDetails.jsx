import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "./Shop"; // Import products from Shop.jsx
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (location.state?.product) {
      setProduct(location.state.product);
    } else {
      const foundProduct = products.find((p) => p._id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [id, location.state]);

  if (!product) {
    return <h2 className="text-center text-danger">Product not found</h2>;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "28rem" }}>
        <img src={product.img} className="card-img-top" alt={product.productName} />
        <div className="card-body text-center">
          <h3 className="card-title">{product.productName}</h3>
          <h5 className="text-muted">Price: <span className="text-success">${product.price}</span></h5>
          <p className="card-text">{product.des || "No description available."}</p>
          <a href="/shop"><button className="btn btn-secondary">Back to Shopping</button></a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
