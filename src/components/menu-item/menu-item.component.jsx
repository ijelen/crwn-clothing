import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, linkUrl, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">
        <a href={linkUrl}>Shop now</a>
      </span>
    </div>
  </div>
);

export default MenuItem;
