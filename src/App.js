import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <div>정ㅇㅖ림 바보</div>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
