import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ProductModal({ show, onHide, product }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product?.images?.[0] || "https://via.placeholder.com/300"}
          alt={product?.title}
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
        <p className="text-center fs-1">${product?.price}</p>
        <p className="text-center" style={{ fontSize: 20 }}>
          <strong>{product?.title}</strong>
        </p>
        <p>{product?.description}</p>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}
