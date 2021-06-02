import React from "react";
import "./App.css";
import Book from "./Book";
import Books from "./Books";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Books}></Route>
          <Route path="/:ISBN13" component={Book}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
