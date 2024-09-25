import { NextFunction, Request, Response } from 'express';

export default function notFound (req:Request, res:Response, next:NextFunction) {
  res.status(404)
  let err = new Error(`${req.originalUrl} not found`)
  next(err) 
}