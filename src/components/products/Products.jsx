import React, { useState } from "react";
import "./products.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products.js";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();

  const [product, setProduct] = useState(ProductsData);

  const filter = (type) => {
    setProduct(
      ProductsData.filter((product) => {
        if (product.type === type) {
          return product;
        }
      })
    );
  };

  return (
    <div className="product-container">
      <img src={Plane} alt="plane" />
      <h1>Our Featured Products</h1>
      <div className="products">
        <ul className="menu-list">
          <li
            onClick={() => {
              setProduct(ProductsData);
            }}
          >
            All
          </li>
          <li
            onClick={() => {
              filter("skin care");
            }}
          >
            Skin Care
          </li>
          <li
            onClick={() => {
              filter("conditioner");
            }}
          >
            Conditioners
          </li>
          <li
            onClick={() => {
              filter("foundation");
            }}
          >
            Foundations
          </li>
        </ul>

        <div className="product-list" ref={parent}>
          {product.map((p, idx) => {
            return (
              <div className="product">
                <div className="left-slide">
                  <div className="name">
                    <span>{p.name}</span>
                    <span>{p.detail}</span>
                  </div>
                  <span>{p.price}₹</span>
                  <div>Shop Now</div>
                </div>
                <img src={p.img} alt="product-image" className="img-product" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
