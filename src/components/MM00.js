import React from "react";
import rena from "../img/rena.png";
import baro from "../img/baro.png";
import classic from "../img/classic.png";
import romance from "../img/romance.png";
import impress from "../img/impress.png";
import mordern from "../img/mordern.png";

class MM00 extends React.Component {
  render() {
    return (
      <div className="MM00">
        <img src={rena} width={`200px`} />
        <img src={baro} width={`200px`} />
        <img src={classic} width={`200px`} />
        <img src={romance} width={`200px`} />
        <img src={impress} width={`200px`} />
        <img src={mordern} width={`200px`} />
      </div>
    );
  }
}

export default MM00;
