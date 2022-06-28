
import { Router } from "express"
import { getBooks, addBook, updateBook, deleteBook } from "../controllers/books"

const router: Router = Router()

router.get("/books", getBooks)

router.post("/add-book", addBook)

router.put("/edit-book/:id", updateBook)

router.delete("/delete-book/:id", deleteBook)

export default router