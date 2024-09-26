require("dotenv").config()
import { Sequelize } from "sequelize";


const DB = new Sequelize({
  dialect: "sqlite",
  storage: process.env.SQLITE_DB
})

export async function connectDB() { 
  try {
    await DB.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default DB