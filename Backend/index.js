import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // Load environment variables at the very top

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;
const MONGO_URI = process.env.MONGO_URI; // Use MONGO_URI as defined in your .env

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    connectTimeoutMS: 20000,  // Increase to 20 seconds
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});

// Listen for connection events
mongoose.connection.on("connected", () => {
    console.log("Successfully connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});