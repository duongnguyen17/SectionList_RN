import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const BookSchema = new Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: Schema.Types.ObjectId,
  },
});

export default model("book", BookSchema);
