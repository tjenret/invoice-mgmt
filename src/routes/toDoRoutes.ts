import express, {Request, Response} from "express"

const toDoRoutes = express.Router()

toDoRoutes.get("/", (req: Request, res: Response) => {
  res.status(200).json({msg: "TO DO routes!"})
})

export default toDoRoutes