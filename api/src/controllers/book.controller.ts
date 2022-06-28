import { Handler, Request, Response } from "express";
import { title } from "process";
import { getRepository, Repository } from "typeorm";

import { Book } from "../entities/Book";
import Checks, { IChecks } from "../helpers/checks";
class BookController {
  _checks: IChecks;

  constructor() {
    this._checks = new Checks();
  }

  public getBooks: Handler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const bookRepository: Repository<Book> = getRepository(Book);
    const books = await bookRepository.find();
    return res.status(200).json({
      succes: true,
      books,
    });
  };

  public newBook: Handler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { name, description, author, color } = req.body;
      const campsCheckeds = this._checks.camps(
        title,
        author,
        status
      );

      if (campsCheckeds) {
        return res.status(400).json({
          succes: false,
          message: "Please send all camps",
        });
      }

      const bookRepository: Repository<Book> = getRepository(Book);
      const book = new Book();
      book.title = name;
      book.author = author;
      book.status = color;

      await bookRepository.save(book);
      return res.status(200).json({
        success: true,
        book,
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: "Internal server error, try later",
      });
    }
  };

  public getBook: Handler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const id: string = req.params.id;
      const idBook = parseInt(id);
      const bookRepository: Repository<Book> = getRepository(Book);
      const book = await bookRepository.find({ id: idBook });
      if (book.length < 1) {
        return res.status(400).json({
          success: false,
          message: "ID not found, send a valid ID",
        });
      }
      return res.status(200).json({
        success: true,
        book,
      });
    } catch (e) {
      return res.status(500).json({
        succes: false,
        message: "Internal server error, try later",
      });
    }
  };

  public editBook: Handler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const id: string = req.params.id;
      const { title, author, status } = req.body;
      const idBook = parseInt(id);
      const bookRepository: Repository<Book> = getRepository(Book);
      const book = await bookRepository
        .createQueryBuilder()
        .update(Book)
        .set({ title, author, status })
        .where({ id: idBook })
        .execute();

      if (book.affected! < 1) {
        return res.status(400).json({
          success: false,
          message: "ID invalid, please send a valid ID",
        });
      }
      return res.status(200).json({
        success: true,
        book,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: "Internal server ERROR, try later",
      });
    }
  };

  public deleteBook: Handler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const id: string = req.params.id;
      const idBook = parseInt(id);
      const bookRepository: Repository<Book> = getRepository(Book);
      const book = await bookRepository.find({ id: idBook });

      const bookDeleted = await bookRepository.remove(book);
      if (bookDeleted.length < 1) {
        return res.status(400).json({
          success: false,
          message: "ID invalid, send a valid ID",
        });
      }
      return res.status(200).json({
        succes: true,
        bookDeleted,
      });
    } catch (e) {
      return res.status(500).json({
        succes: false,
        message: "Internal server ERROR, try later",
      });
    }
  };
}

export default BookController;