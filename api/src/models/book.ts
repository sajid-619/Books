import { IBook } from "./../types/book"
import { model, Schema } from "mongoose"

const bookSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<IBook>("Book", bookSchema)