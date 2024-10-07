import express from "express"
import { getAllItems, getItemByID, getItemsByInvoiceID, addItem, updateItemByID, deleteItemByID} from "../controllers/itemControllers"

const itemRoutes = express.Router()

itemRoutes.get("/", getAllItems)
itemRoutes.get("/:id", getItemByID)
itemRoutes.get("/invoice/:invoiceid", getItemsByInvoiceID)
itemRoutes.post("/", addItem)
itemRoutes.patch("/:id", updateItemByID)
itemRoutes.delete("/:id", deleteItemByID)

export default itemRoutes