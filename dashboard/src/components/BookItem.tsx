import React from "react"

type Props = BookProps & {
  updateBook: (book: IBook) => void
  deleteBook: (_id: string) => void
}

const Book: React.FC<Props> = ({ book, updateBook, deleteBook }) => {
  const checkBook: string = book.status ? `line-through` : ""
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkBook}>{book.title}</h1>
        <span className={checkBook}>{book.author}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateBook(book)}
          className={book.status ? `hide-button` : "Card--button__done"}
        >
          Complete
        </button>
        <button
          onClick={() => deleteBook(book._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Book