import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getBooks = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const books: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/books"
    )
    return books
  } catch (error: any) {
    throw new Error(error)
  }
}

export const addBook = async (
  formData: IBook
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const book: Omit<IBook, "_id"> = {
      title: formData.title,
      author: formData.author,
      status: false,
    }
    const saveBook: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-book",
      book
    )
    return saveBook
  } catch (error: any) {
    throw new Error(error)
  }
}

export const updateBook = async (
  book: IBook
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const bookUpdate: Pick<IBook, "status"> = {
      status: true,
    }
    const updatedBook: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-book/${book._id}`,
      bookUpdate
    )
    return updatedBook
  } catch (error: any) {
    throw new Error(error)
  }
}

export const deleteBook = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedBook: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-book/${_id}`
    )
    return deletedBook
  } catch (error: any) {
    throw new Error(error)
  }
}

