import { Schema, Document, model } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  status: string;
}

const schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, required: true },
});

export default model<IBook>('Book', schema);