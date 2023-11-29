import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import route from "./routes/weatherRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
	origin: process.env.CLIENT_URL,
	credentials: true,
};
app.use(cors(corsOptions));

app.use("/", route);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on PORT ${process.env.PORT}`);
});
