import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const AuthorSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

export default model("author", AuthorSchema);
