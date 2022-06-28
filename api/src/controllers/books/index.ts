import { Response, Request } from "express"
import { IBook } from "./../../types/book"
import Book from "../../models/book"

//Get books
const getBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books: IBook[] = await Book.find()
    res.status(200).json({ books })
  } catch (error) {
    throw error
  }
}

//Add book
const addBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<IBook, "title" | "author" | "status">
  
      const book: IBook = new Book({
        title: body.title,
        author: body.author,
        status: body.status,
      })
  
      const newBook: IBook = await book.save()
      const allBooks: IBook[] = await Book.find()
  
      res
        .status(201)
        .json({ message: "Book added", book: newBook, books: allBooks })
    } catch (error) {
      throw error
    }
  }

//Update book
const updateBook = async (req: Request, res: Response): Promise<void> => {
try {
    const {
    params: { id },
    body,
    } = req
    const updateBook: IBook | null = await Book.findByIdAndUpdate(
    { _id: id },
    body
    )
    const allBooks: IBook[] = await Book.find()
    res.status(200).json({
    message: "Book updated",
    book: updateBook,
    books: allBooks,
    })
} catch (error) {
    throw error
}
}

//Delete book
const deleteBook = async (req: Request, res: Response): Promise<void> => {
try {
    const deletedBook: IBook | null = await Book.findByIdAndRemove(
    req.params.id
    )
    const allBooks: IBook[] = await Book.find()
    res.status(200).json({
    message: "Book deleted",
    book: deletedBook,
    books: allBooks,
    })
} catch (error) {
    throw error
}
}

export { getBooks, addBook, updateBook, deleteBook }