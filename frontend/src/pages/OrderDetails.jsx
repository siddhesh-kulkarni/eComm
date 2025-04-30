import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const foundOrder = savedOrders.find(order => order.id === parseInt(orderId));
    setOrder(foundOrder);
  }, [orderId]);

  if (!order) {
    return <div>Order not found.</div>;
  }

  const handleBackClick = () => {
    navigate('/myorders'); 
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="d-flex align-items-center mb-4">
        <div
          style={{ fontSize: '18px', cursor: 'pointer'}}
          onClick={handleBackClick}
        >
          <strong>&lt;</strong>
        </div>
        <h2 className="ms-3">Order Details</h2>
      </div>

      <div className="justify-content-center">
        <h5>Order Date: {new Date(order.id).toLocaleDateString("en-US")}</h5>
        <h5>Total: ${order.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h5>

        <div className="mt-4">
          <h5>Items:</h5>
          {order.items.map(item => (
            <div key={item.id} className="mb-3">
              <p>{item.title} x {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p><img src={item.images} alt={item.title} style={{height:"200px",width: "200px"}}/></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
