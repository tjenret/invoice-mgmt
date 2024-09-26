import express from "express"
import { getAllClients } from "../controllers/clientControllers"

const clientRoutes = express.Router()

clientRoutes.get("/", getAllClients)

export default clientRoutes