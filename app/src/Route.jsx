import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { generateId, CATEGORY, db } from "./db/db";
class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={() => <div>Home</div>} />
        <Route exact path="/search" component={() => <div>Search</div>} />
        <Route exact path="/post" component={() => <div>Post</div>} />
        <Route exact path="/post/:id" component={() => <div>POST ID</div>} />
      </HashRouter>
    );
  }
}

export default Router;
