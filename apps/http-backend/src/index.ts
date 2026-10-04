import express from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware"
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types"
import { User, Room } from "@repo/db/client"

const app = express()
app.use(express.json())

app.post("/signup", async (req, res)=>{

  const parsedData = CreateUserSchema.safeParse(req.body)
  if(!parsedData.success){
    console.log(parsedData.error)
    res.status(400).json({
      message: "Incorrect input"
    })
    return
  }

  try {
    const user = await User.create({
      email: parsedData.data.username,
      // TODO: Hash the password before storing it in the database
      password: parsedData.data.password,
      name: parsedData.data.name,
    })

    res.json({ userId: user.id })
  }
  catch (error: unknown) {
    console.error("Signup failed:", error)

    // PostgreSQL uses SQLSTATE 23505 for a unique-constraint violation.
    if (typeof error === "object" && error !== null &&
        "sqlState" in error && error.sqlState === "23505") {
      res.status(409).json({ message: "User already exists" })
      return
    }

    res.status(500).json({ message: "Could not create user" })
  }
})

app.post("/signin", async(req, res)=>{
  
  const parsedData = SigninSchema.safeParse(req.body)
  if(!parsedData.success){
    res.json({
      message: "Incorrect input"
    })
    return
  }

  // TODO: Compare the hash pasword here
  const user = await User.first({
    email: parsedData.data.username,
    password: parsedData.data.password
  })

  if(!user){
    res.json(403).json({
      message: "Not authrized"
    })
    return
  }

  const token = jwt.sign({
    userId: user?.id
  }, JWT_SECRET)

  res.json({
    token
  })
})

app.post("/room", middleware, async(req, res)=>{
  const parsedData = CreateRoomSchema.safeParse(req.body)
  if(!parsedData.success){
    res.status(400).json({
      message: "Incorrect input"
    })
    return
  }

   // @ts-ignore: TODO: fix this??
  const userId = req.userId

  try {
    const room = await Room.select("id").create({
      slug: parsedData.data.name,
      adminId: userId
    })

    res.json({ roomId: room.id })
  }
  catch (error: unknown) {
    console.error("Room creation failed:", error)

    if (typeof error === "object" && error !== null &&
        "sqlState" in error && error.sqlState === "23505") {
      res.status(409).json({ message: "Room already exists" })
      return
    }

    res.status(500).json({ message: "Could not create room" })
  }
})

app.listen(3001)  
