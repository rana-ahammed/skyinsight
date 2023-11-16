import mongoose from "mongoose";

const connectDatabase = async () => {
	try {
		mongoose.connect(process.env.DATABASE_URL);
		console.log("Database connected successfully");
	} catch (error) {
		console.log("Error while connecting to database");
	}
};

export default connectDatabase;
