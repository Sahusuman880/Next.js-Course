import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please provide MongoDB URI in environment variable");
}

const client = new MongoClient(uri);
export async function connectDB() {
  await client.connect();
  const db = client.db("nextjs");
  return db;
}
