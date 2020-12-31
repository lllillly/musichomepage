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
            <span>르네상스</span>
          </Link>
          <Link to="/mm02">
            <span>바로크</span>
          </Link>
          <Link to="/mm03">
            <span>고전주의</span>
          </Link>
          <Link to="/mm04">
            <span>낭만주의</span>
          </Link>
          <Link to="/mm05">
            <span>인상주의</span>
          </Link>
          <Link to="/mm06">
            <span>근대,현대</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
