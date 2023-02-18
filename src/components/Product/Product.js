import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
	const { name, img, ratings, price, seller } = product;
	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="product-info">
				<p className="product-name">{name}</p>
				<p className="product-price">Price: ${price}</p>
				<p>Manufacturer:{seller}</p>
				<p>Ratings: {ratings}</p>
			</div>
			<button onClick={() => handleAddToCart(product)} className="btn-cart">
				<p className="btn-text">Add To Cart</p>
				<FontAwesomeIcon icon={faShoppingCart} />
			</button>
		</div>
	);
};

export default Product;
