import { Router } from 'express';
import Book, { IBook } from '../models/book';

const CREATED = 201;
const ITERNAL_SERVER_ERROR = 500;

const router: Router = Router();

router.get('/', async (req, res): Promise<void> => {
  try {

    const books: IBook[] = await Book.find();

    res.json(books);

  } catch (err) {
    res.status(ITERNAL_SERVER_ERROR).json({
      message: 'Something went wrong. Try again later.'
    });
  }
});

router.post('/add', async (req, res): Promise<void> => {
  try {

    type DataProps = Record<
      'title'
    | 'author'
    | 'status', string>;

    const data: DataProps = {
      title: req.body.title,
      author: req.body.author,
      status: req.body.status,
    };

    const book: IBook = new Book(data);

    await book.save();

    res.status(CREATED).json({ book });

  } catch (err) {
    res.status(ITERNAL_SERVER_ERROR).json({
      message: 'Something went wrong. Try again later.'
    });
  }
});

router.get('/:id', async (req, res): Promise<void> => {
  try {

    const book: IBook = await Book.findById(req.params.id);

    res.json(book);

  } catch (err) {
    res.status(ITERNAL_SERVER_ERROR).json({
      message: 'Something went wrong. Try again later.'
    });
  }
});

router.delete('/:id', async (req, res): Promise<void> => {
  try {

    await Book.findByIdAndDelete(req.params.id);

    res.json({ message: 'Book deleted' });

  } catch (err) {
    res.status(ITERNAL_SERVER_ERROR).json({
      message: 'Something went wrong. Try again later.'
    });
  }
});

router.post('/update/:id', async (req, res): Promise<void> => {
  try {

    const book: IBook = await Book.findById(req.params.id);

    book.title = req.body.title;
    book.author = req.body.author;
    book.status = req.body.status;

    await book.save();

    res.json({ message: 'Book updated!' });

  } catch (err) {
    res.status(ITERNAL_SERVER_ERROR).json({
      message: 'Something went wrong. Try again later.'
    });
  }
});

export default router;