import { Document } from "mongoose"

export interface IBook extends Document {
  title: string
  author: string
  status: boolean
}