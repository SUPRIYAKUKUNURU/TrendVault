import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []; // Ensure it's always an array
    setCart(storedCart);
  }, []);

  // Function to update localStorage
  const updateLocalStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Increase quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    updateLocalStorage(updatedCart);
  };

  // Decrease quantity
  // Decrease quantity
const decreaseQuantity = (index) => {
  const updatedCart = [...cart];

  if (updatedCart[index].quantity > 1) {
    updatedCart[index].quantity -= 1;
  } else {
    // Remove item if quantity reaches 1 and user clicks decrease
    updatedCart.splice(index, 1);
  }

  updateLocalStorage(updatedCart);
};


  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateLocalStorage(updatedCart);
  };

  // Calculate total price of an item
  const getTotalPrice = (item) =>
    Number(item.price || 0) * Number(item.quantity || 1);

  // Calculate grand total price
  const grandTotal = cart.reduce((total, item) => total + getTotalPrice(item), 0);

  return (
    <div className="container">
      <h2 className="text-center my-4">Shopping Cart</h2>
     

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.img} alt={item.productName} width="50" />
                  </td>
                  <td>{item.productName}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => decreaseQuantity(index)}
                    >
                      -
                    </button>
                    {item.quantity || 1}
                    <button
                      className="btn btn-sm btn-primary ms-2"
                      onClick={() => increaseQuantity(index)}
                    >
                      +
                    </button>
                  </td>
                  <td>${Number(item.price || 0).toFixed(2)}</td>
                  <td>${getTotalPrice(item)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Centered Grand Total and Back to Shop Button */}
          <div className="d-flex flex-column align-items-center mt-3">
            <h4 className="mb-2">Grand Total: ${grandTotal}</h4>
          </div>
        </div>
      )}
        <div className="d-flex flex-column align-items-center mt-3">
    <a href="/shop">
      <button className="btn btn-dark">Back To Shop</button>
    </a>
  </div>
    </div>
    
  );
};

export default Cart;
