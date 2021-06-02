import React from "react";
import "./App.css";
import Book from "./Book";
import Books from "./Books";
import Navbar from "./Navbar";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Books}></Route>
          <Route path="/book/:ISBN13" component={Book}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
