import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__Scroll">
          <span>클래식</span>
          <span>음악의 발전</span>
        </div>
        <div className="title">Class Music</div>
      </div>
    );
  }
}

export default Header;
