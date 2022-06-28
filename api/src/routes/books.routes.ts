import { IRouter, Router } from "express";
import BookController from "../controllers/book.controller";

class BookRouter {
  public _router: IRouter;
  public _bookController: BookController;
  constructor() {
    this._router = Router();
    this._bookController = new BookController();

    this.routes();
  }
  public routes(): void {
    this._router.get("/", this._bookController.getBooks);
    this._router.post("/", this._bookController.newBook);

    //:id
    this._router.get("/:id", this._bookController.getBook);
    this._router.put("/:id", this._bookController.editBook);
    this._router.delete("/:id", this._bookController.deleteBook);
  }
}

export default BookRouter;