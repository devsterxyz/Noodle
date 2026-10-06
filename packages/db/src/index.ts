import { db } from "./prisma/db.js";

export const User: NonNullable<NonNullable<typeof db.orm.public>["User"]> = db.orm.public!.User!

export const Room: NonNullable<NonNullable<typeof db.orm.public>["Room"]> = db.orm.public!.Room!

export const Chat: NonNullable<NonNullable<typeof db.orm.public>["Chat"]> = db.orm.public!.Chat!