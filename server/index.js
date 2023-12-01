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
	method: "GET, POST",
};

app.use(cors(corsOptions));
// app.all("*", function (req, res) {
// 	res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
// 	);
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// });

app.use("/", route);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on PORT ${process.env.PORT}`);
});
