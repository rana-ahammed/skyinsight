import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./database/db.js";

dotenv.config();
const app = express();
connectDatabase();
app.use(express.json());

app.listen(process.env.PORT, () => {
	console.log(`Server is running on PORT ${process.env.PORT}`);
});
