import Invoice from "../models/invoiceModel"
import { Request, Response } from "express"


const getAllInvoices = async (req: Request, res: Response) => {
  try {
    let results = await Invoice.findAll()
    res.status(200).json(results)
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}


const getInvoiceByID = async (req: Request, res: Response) => {
  try {
    let results = await Invoice.findOne({ where: { "invoiceid": req.params.id } })
    res.status(200).json(results)
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}

const getInvoicesByClientID = async (req: Request, res: Response) => {
  try {
    let results = await Invoice.findAll({ where: { "clientid": req.params.clientid } })
    res.status(200).json(results)
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}

const addInvoice = async (req: Request, res: Response) => {
  try {
    let results:any = await Invoice.create(req.body)
    res.status(201).json({ "message": "Invoice Added", "inv":results.invoiceid})
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}

const updateInvoiceByID = async (req: Request, res: Response) => {
  try {
    let results = await Invoice.update(req.body, {where: { "invoiceid": req.params.id } })
    res.status(200).json({ "message": `${results} invoices(s) updated` })
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}

const deleteInvoiceByID = async (req: Request, res: Response) => {
  try {
    let results = await Invoice.destroy({where: { "invoiceid": req.params.id } })
    res.status(200).json({ "message": `${results} invoices(s) deleted` })
  }
  catch(error:any) {
    res.status(500).json({"error": "Server Error"})
    console.log(error)
  }
}

export { getAllInvoices, getInvoiceByID, getInvoicesByClientID, addInvoice, updateInvoiceByID, deleteInvoiceByID }