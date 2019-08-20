import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, linkUrl, imageUrl, size, history, match }) => (
  <div
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
    className={`${size} menu-item`}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
);

// HOC, adds history, location and match props to the wrapped component
export default withRouter(MenuItem);
