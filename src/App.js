import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import MM00 from "./components/MM00";
import MM01 from "./components/MM01";
import MM02 from "./components/MM02";
import MM03 from "./components/MM03";
import MM04 from "./components/MM04";
import MM05 from "./components/MM05";
import MM06 from "./components/MM06";
import { HashRouter as Router, Route } from "react-router-dom";
import "./css/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <br />
          <div className="Box">
            <Route exact path="/" component={MM00} />
            <Route exact path="/mm01" component={MM01} />
            <Route exact path="/mm02" component={MM02} />
            <Route exact path="/mm03" component={MM03} />
            <Route exact path="/mm04" component={MM04} />
            <Route exact path="/mm05" component={MM05} />
            <Route exact path="/mm06" component={MM06} />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
