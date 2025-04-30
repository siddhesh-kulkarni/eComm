import React from "react";

const Cards = ({ searchedProduct, handleImageClick, handleAddToCart }) => {
  return (
    <div className="row g-4 justify-content-center mt-3">
      {searchedProduct.length > 0 ? (
        searchedProduct.map((product) => (
          <div
            key={product.id}
            className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex align-items-stretch"
          >
            <div
              className="card border-0 shadow-sm position-relative"
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() => handleImageClick(product)}
            >
              <div className="position-relative" style={{ height: "200px" }}>
                <img
                  src={product.images?.[0] || "https://via.placeholder.com/150"}
                  className="card-img-top rounded-top"
                  alt={product.title}
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <span className="badge bg-light text-dark position-absolute bottom-0 start-0 m-1 rounded-pill px-2 py-1">
                  {product.category?.name || "Category"}
                </span>
                <button
                  className="btn btn-light btn-sm rounded-circle position-absolute top-0 end-0 m-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  +
                </button>
              </div>
              <div
                className="card-body p-2 d-flex flex-column justify-content-between"
                style={{ height: "100px" }}
              >
                <p className="card-text small text-truncate">{product.title}</p>
                <h6 className="fw-bold">${product.price}</h6>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="logo" style={{ fontSize: "150px" }}>
                😓
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Nothing related :(
              </div>
            </div>
      )}
    </div>
  );
};

export default Cards;
