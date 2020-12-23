import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer__top">
          <p>사업자 등록번호 : 128-394-29342</p>
          <p>통신판매업신고번호 : 제 2020-충남공주-1002</p>
          <p>대표이사 : 빵</p>
          <p>법인명 : (주)music</p>
          <p>개인정보관리책임자 : 빵</p>
        </div>
        <div className="footer__bottom">
          <p>주소 : 충남 공주시 우금티로 531</p>
          <p>대표번호 : 010-1234-5678</p>
          <p>서비스 문의 : costar011@gmail.com</p>
          <p>제휴 문의 : qkdgywls0503@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Footer;
