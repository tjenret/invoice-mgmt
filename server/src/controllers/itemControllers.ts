import Item from "../models/itemModel"
import { Request, Response } from "express"


const getAllItems = async (req: Request, res: Response) => {
  try {
    let results = await Item.findAll()
    res.status(200).json(results)
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}


const getItemByID = async (req: Request, res: Response) => {
  try {
    let results = await Item.findOne({ where: { "itemid": req.params.id } })
    res.status(200).json(results)
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}

const getItemsByInvoiceID = async (req: Request, res: Response) => {
  try {
    let results = await Item.findAll({ where: { "invoiceid": req.params.invoiceid } })
    res.status(200).json(results)
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}

const addItem = async (req: Request, res: Response) => {
  try {
    await Item.create(req.body)
    res.status(201).json({ "message": "Item Added"})
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}

const updateItemByID = async (req: Request, res: Response) => {
  try {
    let results = await Item.update(req.body, {where: { "itemid": req.params.id } })
    res.status(200).json({ "message": `${results} items(s) updated` })
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}

const deleteItemByID = async (req: Request, res: Response) => {
  try {
    let results = await Item.destroy({where: { "itemid": req.params.id } })
    res.status(200).json({ "message": `${results} items(s) deleted` })
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}

export { getAllItems, getItemByID, getItemsByInvoiceID, addItem, updateItemByID, deleteItemByID }