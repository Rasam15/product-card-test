import React, { useState } from "react";
import "./ProductCard.css";

const productData = {
  name: "Iphone 16",
  price: 1200.00,
image: "/images/Apple-iPhone-16.jpg",
  variants: ["Red", "Blue", "Green"],
  inStock: true,
};

export default function ProductCard() {
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0]);

  return (
    <div className="product-card">
      <img src={productData.image} alt={productData.name} className="product-image" />


      <div className="product-details">
        <h2 className="product-name">{productData.name}</h2>
        <p className="product-price">${productData.price.toFixed(2)}</p>

        <label className="variant-label">
          Variant:
          <select
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
            className="variant-select"
          >
            {productData.variants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </label>

        {productData.inStock ? (
          <button className="add-to-cart">Add to Cart</button>
        ) : (
          <button className="out-of-stock" disabled>
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
}
