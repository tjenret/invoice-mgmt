import express from "express"
import { getAllClients, getClientByID, addClient, updateClientByID, deleteClientByID} from "../controllers/clientControllers"

const clientRoutes = express.Router()

clientRoutes.get("/", getAllClients)
clientRoutes.get("/:id", getClientByID)
clientRoutes.post("/", addClient)
clientRoutes.patch("/:id", updateClientByID)
clientRoutes.delete("/:id", deleteClientByID)

export default clientRoutes