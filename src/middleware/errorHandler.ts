import { NextFunction, Request, Response } from 'express';

export default function notFound(error: Error, req: Request, res: Response, next: NextFunction) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode)
  res.json({ msg: error.message, stack: process.env.NODE_ENV === 'production' ? "" : error.stack, })
}