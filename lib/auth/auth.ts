import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { initializeUserBoard } from "../initUserBoard";

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
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    if(user.id) await initializeUserBoard(user.id)
                }
            }
        }
    }
});
export async function getSession() {
    const result = await auth.api.getSession({
        headers: await headers(),
    });
    return result;
}
export async function signOut() {
    const result = await auth.api.signOut({
        headers: await headers(),
    });
    if (result.success) {
        redirect("/sign-in");
    }
}