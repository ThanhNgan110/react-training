import React from "react";
import "./product.css";
import product from "../../assets/imgs/product.jpg"

const Product = () => {
	return <img className="product" src={product} alt="product" />;
};

export default Product;
