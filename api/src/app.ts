import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import bookRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(bookRoutes)

//Connect MongoDB Atlas using your username and password
const uri: string = `mongodb+srv://sz619:<password>@books.05lcnmn.mongodb.net/?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })