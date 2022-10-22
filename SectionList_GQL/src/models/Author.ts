import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const AuthorSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  books: {
    type: [Schema.Types.ObjectId],
  },
});

export default model("author", AuthorSchema);
