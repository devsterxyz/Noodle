import { db } from "./prisma/db.js";

export const User: NonNullable<NonNullable<typeof db.orm.public>["User"]> = db.orm.public!.User!;

export const Room: NonNullable<NonNullable<typeof db.orm.public>["Room"]> = db.orm.public!.Room!;