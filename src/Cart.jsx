import { useEffect, useState } from "react";

const Cart = ({ setShowCart }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const updateCart = (productId, change) => {
    const updatedCart = cart
      .map((item) =>
        item._id === productId
          ? { ...item, quantity: item.quantity + change }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const grandTotal = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.img} alt={item.productName} width="60" height="60" />
                </td>
                <td>{item.productName}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-sm btn-danger mx-2" onClick={() => updateCart(item._id, -1)}>
                    -
                  </button>
                  {item.quantity}
                  <button className="btn btn-sm btn-success mx-2" onClick={() => updateCart(item._id, 1)}>
                    +
                  </button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="btn btn-sm btn-danger" onClick={() => updateCart(item._id, -item.quantity)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cart.length > 0 && (
        <h4 className="text-center mt-4">
          Grand Total: <span className="text-success">${grandTotal}</span>
        </h4>
      )}

<div className="text-center mt-3">
  <a href="/shop">
    <button className="btn btn-secondary">Back To Shop</button>
  </a>
  </div>
    </div>
  );
};

export default Cart;
