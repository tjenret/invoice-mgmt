import express from "express"
import myInfoRoutes from "./myInfoRoutes"
import clientsRoutes from "./clientsRoutes"
import invoiceRoutes from "./invoicesRoutes"

const router = express.Router()

router.use("/myinfo", myInfoRoutes)
router.use("/clients", clientsRoutes)
router.use("/invoices", invoiceRoutes)


export default router
