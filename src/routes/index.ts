import express from "express"
import clientsRoutes from "./clientsRoutes"

const router = express.Router()

router.use("/clients", clientsRoutes)

export default router
