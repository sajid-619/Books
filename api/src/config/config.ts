import dotenv from "dotenv";
dotenv.config();

export interface IConfig {
  DB: {
    TYPE: "postgres";
    URI: string;
    USER: string;
    KEY: string;
    PORT: number;
    HOST: string;
    DATABSE: string;
  };
  PORT: string | number;
}
export default <IConfig>{
  DB: {
    TYPE: process.env.DB_TYPE || "postgres",
    URI: process.env.DB_URI || "",
    USER: process.env.DB_USER || "postgres",
    KEY: process.env.DB_KEY || "",
    PORT: process.env.DB_PORT || 5432,
    HOST: process.env.DB_HOST || "localhost",
    DATABSE: process.env.DB || "typeorm",
  },
  PORT: process.env.PORT || 4000,
};