import low from "lowdb";
import myAdapter from "../lib/WebPackAdapter";
import dbInstance from "./db.json";
import shortId from "shortid";
const adapter = new myAdapter(dbInstance);
const db = low(adapter);
const CATEGORY = {
  cars: "cars",
  posts: "posts"
};
export {
shortId,
db,
CATEGORY
}