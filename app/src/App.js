import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import low from "lowdb";
import myAdapter from "./lib/WebPackAdapter";
import dbInstance from "./db/db.json";
import id from 'shortid'
const adapter = new myAdapter(dbInstance);
const db = low(adapter);
const CATEGORY = {
  cars: "cars",
  posts: "posts"
};
function App() {
  let [, setState] = useState();
  function handleUpdate() {
    //passing empty object will re-render the component
    setState({});
  }
  const dbStatus = () => {
    return db.getState();
  };
  const count = (cat) => {
    return db
      .get(CATEGORY[cat])
      .size()
      .value();
  };
  const addPost = () => {
    db
      .get(CATEGORY.cars)
      .push({ id: id.generate(), make: 'audi' })
      .write()
    handleUpdate()
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>
          Database status:{Object.keys(CATEGORY).map((cat, index) => {
            return ` ${cat.toUpperCase()}: ${count(cat)}${index + 1 < Object.keys(CATEGORY).length ? ', ' : ''}`
          })}
          <br></br>
          <span>{JSON.stringify(dbStatus())}</span>
          <br></br>
          <button onClick={addPost}>
            Add Post Test
          </button>
        </span>
      </header>
    </div>
  );
}

export default App;
