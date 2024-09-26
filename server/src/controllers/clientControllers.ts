import Client from "../models/clientModel"
import { Request, Response } from "express"


const getAllClients = async (req: Request, res: Response) => {
  try {
    let results = await Client.findAll()
    res.status(200).json(results)
  }
  catch(error:any) {
    res.status(500).json({"error": error.message})
    console.log(error)
  }
}


const getClientByID = async (req: Request, res: Response) => {
  try {
    let results = await Client.findOne({ where: { "clientid": req.params.id } })
    res.status(200).json(results)
  }
  catch(error:any) {
    res.status(500).json({"error": error.message})
    console.log(error)
  }
}

const addClient = async (req: Request, res: Response) => {
  try {
    await Client.create(req.body)
    res.status(201).json({ "message": "Client Added"})
  }
  catch(error:any) {
    res.status(500).json(error.errors[0].message)
    console.log(error)
  }
}

const updateClientByID = async (req: Request, res: Response) => {
  try {
    let results = await Client.update(req.body, {where: { "clientid": req.params.id } })
    res.status(200).json({ "message": `${results} clients(s) updated` })
  }
  catch(error:any) {
    res.status(500).json(error.errors[0].message)
    console.log(error)
  }
}

const deleteClientByID = async (req: Request, res: Response) => {
  try {
    let results = await Client.destroy({where: { "clientid": req.params.id } })
    res.status(200).json({ "message": `${results} clients(s) deleted` })
  }
  catch(error:any) {
    res.status(500).json(error.errors[0].message)
    console.log(error)
  }
}

export { getAllClients, getClientByID, addClient, updateClientByID, deleteClientByID }