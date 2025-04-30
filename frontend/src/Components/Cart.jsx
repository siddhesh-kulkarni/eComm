import React from "react";
import { Modal } from "react-bootstrap";
import "../assets/Cart.css"; 
export default function Cart({ cartItems, setCartItems, onCheckout, show, onHide }) {
  const updateQuantity = (id, amount, e) => {
    e.stopPropagation();
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  const removeItem = (id, e) => {
    e.stopPropagation();
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!show) return null;

  return (
    <div className="cart-drawer-overlay">
      <div className="cart-drawer">
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="m-0">My Order</h4>
            <button 
              className="btn-close" 
              onClick={onHide}
              aria-label="Close"
            ></button>
          </div>
          
          <div style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
            {cartItems.length === 0 ? (
              <p className="text-muted">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center mb-3 pb-3"
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  <div className="d-flex align-items-center" style={{ width: "100%" }}>
                    <img
                      src={item.images?.[0] || "https://via.placeholder.com/90"}
                      alt={item.title}
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                    <div className="ms-3 flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="mb-1">{item.title}</p>
                          <h5 className="mb-2">${item.price}</h5>
                        </div>
                        <button
                          className="btn-close"
                          onClick={(e) => removeItem(item.id, e)}
                          aria-label="Remove"
                        ></button>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <button
                          className="btn btn-light rounded-circle"
                          style={{ width: "30px", height: "30px", padding: "0", backgroundColor: "#FFD1D1" }}
                          onClick={(e) => updateQuantity(item.id, -1, e)}
                        >
                          -
                        </button>
                        <span className="mx-3 px-3 py-1 rounded" style={{ backgroundColor: "#E8E8E8" }}>
                          {item.quantity}
                        </span>
                        <button
                          className="btn btn-light rounded-circle"
                          style={{ width: "30px", height: "30px", padding: "0", backgroundColor: "#D1FFD4" }}
                          onClick={(e) => updateQuantity(item.id, 1, e)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {cartItems.length > 0 && (
            <>
              <div className="d-flex justify-content-between mt-4 mb-3">
                <h5>Total:</h5>
                <h5>${calculateTotal().toFixed(0)}</h5>
              </div>
              <button
                className="btn btn-dark w-100 py-2"
                onClick={onCheckout}
                style={{ 
                  borderRadius: "4px", 
                  backgroundColor: "#000",
                  fontSize: "16px"
                }}
              >
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}