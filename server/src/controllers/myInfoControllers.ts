import MyInfo from "../models/myInfoModel"
import { Request, Response } from "express"


const getAllMyInfoRecs = async (req: Request, res: Response) => {
  try {
    let results = await MyInfo.findAll()
    res.status(200).json(results)
  }
  catch(error:any) {
    res.status(500).json({"error": error.message})
    console.log(error)
  }
}


const getMyInfoByID = async (req: Request, res: Response) => {
  try {
    let results = await MyInfo.findOne({ where: { "myInfoid": req.params.id } })
    res.status(200).json(results)
  }
  catch(error:any) {
    res.status(500).json({"error": error.message})
    console.log(error)
  }
}

const addMyInfoRec = async (req: Request, res: Response) => {
  try {
    await MyInfo.create(req.body)
    res.status(201).json({ "message": "MyInfo Added"})
  }
  catch(error:any) {
    res.status(500).json(error.errors[0].message)
    console.log(error)
  }
}

const updateMyInfoByID = async (req: Request, res: Response) => {
  try {
    let results = await MyInfo.update(req.body, {where: { "myInfoid": req.params.id } })
    res.status(200).json({ "message": `${results} myInfos(s) updated` })
  }
  catch(error:any) {
    res.status(500).json(error.errors[0].message)
    console.log(error)
  }
}

const deleteMyInfoByID = async (req: Request, res: Response) => {
  try {
    let results = await MyInfo.destroy({where: { "myInfoid": req.params.id } })
    res.status(200).json({ "message": `${results} myInfos(s) deleted` })
  }
  catch(error:any) {
    res.status(500).json(error.errors[0].message)
    console.log(error)
  }
}

export { getAllMyInfoRecs, getMyInfoByID, addMyInfoRec, updateMyInfoByID, deleteMyInfoByID }