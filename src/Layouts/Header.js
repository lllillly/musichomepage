import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__Scroll">
          <span onClick={this._ScrollMM01}>클래식</span>
          <span onClick={this._ScrollBottom}>음악의 발전</span>
        </div>
        <div className="title">Class Music</div>
      </div>
    );
  }

  _ScrollBottom = () => window.scrollTo(0, 5500);
  _ScrollMM01 = () => window.scrollTo(0, 970);
}

export default Header;
