import React from "react";
import "./homepage.style.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div class="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div class="content">
          <h1 className="title">Jackets</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div class="content">
          <h1 className="title">Sneakers</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div class="content">
          <h1 className="title">Mens</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div class="content">
          <h1 className="title">Womens</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
