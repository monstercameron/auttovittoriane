import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { db, CATEGORY, shortId } from "./db/db";
import Home from "./layouts/Home";
import PostPage from "./layouts/PostPage";
class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  include = () => {
    return {
      db,
      generateIdFn: shortId.generate,
      CATEGORY
    };
  };
  getDBStatus = () => {
    console.log(`DB state:`, db.getState());
  };
  render() {
    this.getDBStatus();
    return (
      <HashRouter>
        <Route exact path="/" component={_ => <Home {...this.include()} />} />
        <Route
          exact
          path="/post/:id"
          component={_ => <PostPage {...this.include()} />}
        />
        <Route exact path="/changelog" component={() => <div>Search</div>} />
        <Route exact path="/search" component={() => <div>Search</div>} />
        <Route exact path="/aboutme" component={() => <div>Post</div>} />
        <Route exact path="/sponsor" component={() => <div>POST ID</div>} />
        <Route
          exact
          path="/ext/:url"
          component={() => <div>external url</div>}
        />
      </HashRouter>
    );
  }
}

export default Router;
