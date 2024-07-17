import React from "react";

function MenuItem({ item }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={item?.image} alt="Burger" className="image" />
      </div>
      <div className="content">
        <h3 className="title">{item?.name}</h3>
        <div>
          {" "}
          <span className="rating">★★★★★</span>
          <span className="number">{item?.rating}</span>
        </div>
        <div className="footer">
          <p className="price">{item?.price}</p>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
