import React, { useEffect, useState } from 'react'
import BookItem from './components/BookItem'
import AddBook from './components/AddBook'
import { getBooks, addBook, updateBook, deleteBook } from './api'

const App: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = (): void => {
    getBooks()
    .then(({ data: { books } }: IBook[] | any) => setBooks(books))
    .catch((err: Error) => console.log(err))
  }

  const handleSaveBook = (e: React.FormEvent, formData: IBook): void => {
    e.preventDefault()
    addBook(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Book not saved")
        }
        setBooks(data.books)
      })
      .catch(err => console.log(err))
  }

  const handleUpdateBook = (book: IBook): void => {
    updateBook(book)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Book not updated")
        }
        setBooks(data.books)
      })
      .catch(err => console.log(err))
  }
  
  const handleDeleteBook = (_id: string): void => {
    deleteBook(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Book not deleted")
        }
        setBooks(data.books)
      })
      .catch(err => console.log(err))
  }

  return (
    <main className='App'>
      <h1>Books</h1>
      <AddBook saveBook={handleSaveBook} />
      {books.map((book: IBook) => (
        <BookItem
          key={book._id}
          updateBook={handleUpdateBook}
          deleteBook={handleDeleteBook}
          book={book}
        />
      ))}
    </main>
  )
}

export default App