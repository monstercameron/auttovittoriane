import low from "lowdb";
import myAdapter from "../lib/WebPackAdapter";
import dbInstance from "./db.json";
import id from 'shortid'
const adapter = new myAdapter(dbInstance);
const db = low(adapter);
const CATEGORY = {
    cars: "cars",
    posts: "posts"
};
export default {
    generateId: id.generate,
    db,
    CATEGORY
}