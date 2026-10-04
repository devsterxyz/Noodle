import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";


export function middleware(req: Request, res: Response, next: NextFunction){
  const authorization = req.headers["authorization"]
  if (!authorization) {
    res.status(401).json({ message: "Unauthorized" })
    return
  }

  const token = authorization.replace(/^Bearer\s+/i, "")

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    if (typeof decoded === "object" && typeof decoded.userId === "string") {
      // @ts-ignore: TODO: fix this??
      req.userId = decoded.userId
      next()
      return
    }
  }
  catch {
    // Invalid and expired tokens are unauthorized requests.
  }

  res.status(401).json({ message: "Unauthorized" })
}