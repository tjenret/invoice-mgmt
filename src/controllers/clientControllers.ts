import getAll from "../helpers/getQueries"
import Client from "../models/clientModel"
import { Request, Response } from "express"


const getAllClients = async (req: Request, res: Response) => {
  let results = await getAll(req, res, Client.tableName)
  res.status(200).json(results)
}

export {getAllClients}