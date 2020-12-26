import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <div className="app__MenuBar">
          <span>Menu</span>
        </div>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
