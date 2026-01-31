import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const DB_URI = process.env.DB_URI;
if (!DB_URI) {
    throw new Error("Please define the DB_URI environment variable inside .env");
}
const client = new MongoClient(DB_URI);
const db = client.db();

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET!,
    baseURL: process.env.BETTER_AUTH_URL,
    database: mongodbAdapter(db, { client }),
    emailAndPassword: { enabled: true },
});