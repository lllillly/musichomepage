import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer__top">
          <span>사업자 등록번호 : 128-394-29342</span>
          <span>통신판매업신고번호 : 제 2020-충남공주-1002</span>
          <span>대표이사 : 방효진,정예림</span>
          <span>법인명 : (주)music</span>
          <span>개인정보관리책임자 : 방효진,정예림</span>
        </div>
        <div className="footer__bottom">
          <span>주소 : 충남 공주시 우금티로 531</span>
          <span>대표번호 : 010-1234-5678</span>
          <span>서비스 문의 : yerim.dev@gmail.com</span>
          <span>제휴 문의 : qkdgywls0503@gmail.com</span>
        </div>
      </div>
    );
  }
}

export default Footer;
