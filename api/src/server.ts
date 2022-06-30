import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import books from './routes/books';

dotenv.config();

const EXIT_CODE = 1;

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/books', books);

async function launch(): Promise<void> {
  try {

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });

  } catch (err) {
    console.log('Server Error', err.message);
    process.exit(EXIT_CODE);
  }
}

launch();

export default app;