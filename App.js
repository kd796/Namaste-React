import ReactDOM from "react-dom/client";
import React from "react";

const Header = () => {
  
  return (<div className="header">
    <div className="logo-container">
      <img className="logo" src="https://png.pngtree.com/template/20191024/ourmid/pngtree-food-delivery-logo-design-fast-delivery-service-sign-image_323015.jpg"></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  );
}



const AppLayout = () => {
  return (
    <div className="app">
      { Header() }
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);