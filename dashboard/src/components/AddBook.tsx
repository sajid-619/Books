import React, { useState } from 'react'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: IBook | any) => void 
}

const AddBook: React.FC<any> = ({ saveBook }) => {
  const [formData, setFormData] = useState<IBook | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveBook(e, formData)}>
      <div>
        <div>
          <label htmlFor='title'>Title</label>
          <input onChange={handleForm} type='text' id='title' />
        </div>
        <div>
          <label htmlFor='author'>Author</label>
          <input onChange={handleForm} type='text' id='author' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Book</button>
    </form>
  )
}

export default AddBook