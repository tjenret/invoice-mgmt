import express from "express"
import { getAllMyInfoRecs, getMyInfoByID, addMyInfoRec, updateMyInfoByID, deleteMyInfoByID} from "../controllers/myInfoControllers"

const myInfoRoutes = express.Router()

myInfoRoutes.get("/", getAllMyInfoRecs)
myInfoRoutes.get("/:id", getMyInfoByID)
myInfoRoutes.post("/", addMyInfoRec)
myInfoRoutes.patch("/:id", updateMyInfoByID)
myInfoRoutes.delete("/:id", deleteMyInfoByID)

export default myInfoRoutes