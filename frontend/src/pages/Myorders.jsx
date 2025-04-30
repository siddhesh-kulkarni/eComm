import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
    const email = localStorage.getItem("email");
    console.log(savedOrders);
  }, []);

  const handleOrderClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    });
  };

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">My Orders</h2>
      {orders.length > 0 ? (
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            {orders.map(order => (
              <div 
                key={order.id}
                className="card mb-3 shadow-sm"
                onClick={() => handleOrderClick(order.id)}
                style={{ cursor: 'pointer' }}
              >
               <div className="card-body d-flex justify-content-between align-items-center">
  <div>
    <div className="mb-2">
      <span>{formatDate(order.id)}</span>
    </div>
    <div>
      <span>{order.items.length} items</span>
    </div>
  </div>
  <div>
    <h5 className="mb-0">${calculateTotal(order.items).toFixed(2)}</h5>
  </div>
  <div>
    {order.items.length > 0 && (
      <img
        src={order.items[0].images[0]}
        alt={order.items[0].title}
        style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
      />
    )}
  </div>
  <div style={{ fontSize: '18px', marginLeft: '10px' }}>
    <strong>&gt;</strong>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center my-5">
          <div className="mb-3" style={{ fontSize: "64px" }}>📦</div>
          <h5>No orders yet</h5>
          <p className="text-muted">Your order history will appear here</p>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
