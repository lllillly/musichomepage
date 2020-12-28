import React from "react";
import { Link } from "react-router-dom";
import logoimage from "../img/logoimage.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <img src={logoimage} width="200px" height="120px" />
        </Link>
        <div className="Header__01">
          <Link to="/mm01">
            <span>01</span>
          </Link>
          <Link to="/mm02">
            <span>02</span>
          </Link>
          <Link to="/mm03">
            <span>03</span>
          </Link>
          <Link to="/mm04">
            <span>04</span>
          </Link>
          <Link to="/mm05">
            <span>05</span>
          </Link>
          <Link to="/mm06">
            <span>06</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
