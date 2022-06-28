import { IRouter, Router } from "express";

import IndexController from "../controllers/index.controller";

class IndexRouter {
  _router: IRouter;
  _indexController: IndexController;
  constructor() {
    this._router = Router();
    this._indexController = new IndexController();
    this.routes();
  }

  public routes(): void {
    this._router.get("/", this._indexController.index);
  }
}

export default IndexRouter;