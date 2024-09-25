import express from "express"
import toDoRoutes from "./toDoRoutes"

const router = express.Router()

router.use("/todo", toDoRoutes)

export default router
