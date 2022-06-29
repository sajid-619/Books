interface IBook {
    _id: string
    title: string
    author: string
    status: boolean
    createdAt?: string
    updatedAt?: string
  }
  
  interface BookProps {
    book: IBook
  }
  
  type ApiDataType = {
    message: string
    status: string
    books: IBook[]
    book?: IBook
  }