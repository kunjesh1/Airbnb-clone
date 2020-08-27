import React from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {/*Header*/}
      {/*Banner*/}
      {/*Search*/}
      {/*Cards*/}
      {/*Footer*/}

      {/*Search Page*/}
      {/*---*/}
    </div>
  );
}

export default App;
