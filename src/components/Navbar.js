import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "../images/logo.svg";
class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" height="30" width="200" />
        </div>

        <div className="account">
          <div className="item-header">¿Qué es Games ABC?</div>
          <div className="item-header">
            <Link to="/canchas">Canchas</Link>
          </div>

          <div className="item-header">Contactanos</div>
        </div>

        <div className="cart">
          <div>
            <strong>Descarga la app</strong>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
