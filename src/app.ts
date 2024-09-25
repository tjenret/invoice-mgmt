import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import notFound from "./middleware/notFound"
import errorHandler from "./middleware/errorHandler"
import routes from "./routes"

const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 5100

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());


app.get("/", (req,res) => { 
  res.status(200).send("API Works!")
})

app.use("/api/v1", routes)

app.use(notFound)
app.use(errorHandler)
app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})