import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import "reflect-metadata";
import chalk from "chalk";

import config from "./config/config";
import Database from "./database/database";
import IndexRouter from "./routes/index.routes";
import BookRouter from "./routes/books.routes";

class App {
  public _app: Application;
  public _database: Database;
  public _indexRouter: IndexRouter;
  protected _bookRouter: BookRouter;
  constructor() {
    this._app = express();
    this._database = new Database();
    this._indexRouter = new IndexRouter();
    this._bookRouter = new BookRouter();

    this.database();
    this.config();
    this.routes();
  }

  public async database(): Promise<void> {
    await this._database.connection();
  }

  public config(): void {
    this._app.set("port", config.PORT);
    this._app.use(morgan("dev"));
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: false }));
    this._app.use(cors());
  }

  public routes(): void {
    this._app.use("/", this._indexRouter._router);
    this._app.use("/books", this._bookRouter._router);
  }

  public run(): void {
    this._app.listen(config.PORT, () => {
      console.log(chalk.bgBlue("Server on port"), config.PORT);
    });
  }
}

const app = new App();

app.run();