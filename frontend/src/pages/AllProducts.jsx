import React, { useEffect, useState } from "react";
import {API_URL} from "../../api/API";
import ProductModal from "../Components/ProductModal";
import Cart from "../Components/Cart";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Cards from "../Components/Cards";
import SearchInput from "../Components/SearchInput";

export default function AllProducts({ category }) {
  const [products, setProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orders, setOrders] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(category || "all");

  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("name");
    console.log(name);
    const getAllProducts = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        const result = await response.json();
        setProducts(result);

        const filtered =
          currentCategory === "all"
            ? result
            : result.filter(
                (product) =>
                  product.category?.name?.toLowerCase() ===
                  currentCategory.toLowerCase()
              );

        setSearchedProduct(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
    getAllProducts();
  }, [currentCategory]);

  const getSearchedProduct = (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(val) &&
        (currentCategory === "all" ||
          product.category?.name?.toLowerCase() ===
            currentCategory.toLowerCase())
    );
    setSearchedProduct(filtered);
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    const email = localStorage.getItem("email");
    if(!email){
      alert("Login first");
      navigate('/login');
    }else{
      setCartItems((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prev, { ...product, quantity: 1 }];
      });
      setShowCart(true);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      const newOrder = { id: Date.now(), items: cartItems };
      const updatedOrders = [...orders, newOrder];
      setOrders(updatedOrders);
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      setCartItems([]);
      setShowCart(false);
      navigate("/myorders");
    }
  };

  const getCartItemsCount = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);
  const handleCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    <>
      <Navbar
        getCategory={handleCategoryChange}
        cartItemsCount={getCartItemsCount()}
        setShowCart={setShowCart}
      />
      <div className="container mt-3" style={{ paddingTop: "100px" }}>
        <SearchInput onSearch={getSearchedProduct} />
        <Cards
          searchedProduct={searchedProduct}
          handleImageClick={handleImageClick}
          handleAddToCart={handleAddToCart}
        />
        <ProductModal
          show={showModal}
          onHide={handleCloseModal}
          product={selectedProduct}
        />
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          onCheckout={handleCheckout}
          show={showCart}
          onHide={() => setShowCart(false)}
        />
      </div>
    </>
  );
}
