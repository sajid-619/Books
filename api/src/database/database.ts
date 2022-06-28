import { createConnection } from "typeorm";
import chalk from "chalk";

import config from "../config/config";
import { Book } from "../entities/Book";
class Database {
  public async connection(): Promise<void> {
    try {
      await createConnection({
        type: config.DB.TYPE,
        // host: config.DB.HOST,
        // port: config.DB.PORT,
        // username: config.DB.USER,
        // password: config.DB.KEY,
        // database: config.DB.DATABSE,
        url: config.DB.URI,
        entities: [Book],
        synchronize: true,
        logging: false,
      });
      console.log(chalk.bgBlue("DB IS CONNECTED"));
    } catch (e) {
      console.log(chalk.bgRed("DB IS NOT CONNECTED"), e);
    }
  }
}

export default Database;