import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__01">
          <Link to="/">
            <span>홈</span>
          </Link>
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
