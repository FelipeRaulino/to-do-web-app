import "dotenv/config";
import mongoose from "mongoose";

const db = mongoose.connect(process.env.MONGO_URI);

export default db;