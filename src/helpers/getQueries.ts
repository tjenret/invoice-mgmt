import { Request, Response } from "express"
import DB from "../data/db"

const getAll = async (req: Request, res: Response,  tableName: string) => {
  const [results, metadata] = await DB.query(`SELECT * FROM ${tableName}`)
  return results
}



export default getAll