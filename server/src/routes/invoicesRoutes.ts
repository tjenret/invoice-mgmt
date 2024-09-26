import express from "express"
import { getAllInvoices, getInvoiceByID, getInvoicesByClientID, addInvoice, updateInvoiceByID, deleteInvoiceByID} from "../controllers/invoiceControllers"

const invoiceRoutes = express.Router()

invoiceRoutes.get("/", getAllInvoices)
invoiceRoutes.get("/:id", getInvoiceByID)
invoiceRoutes.get("/:clientid", getInvoicesByClientID)
invoiceRoutes.post("/", addInvoice)
invoiceRoutes.patch("/:id", updateInvoiceByID)
invoiceRoutes.delete("/:id", deleteInvoiceByID)

export default invoiceRoutes