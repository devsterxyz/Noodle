import { db } from "./prisma/db.js";

export { db };
export const User: NonNullable<NonNullable<typeof db.orm.public>["User"]> = db.orm.public!.User!;