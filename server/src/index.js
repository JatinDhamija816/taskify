import app from "./app.js";
import dotenv from "dotenv";
import ConnectDB from "./config/database.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to the database and start the server
const startServer = async () => {
    try {
        await ConnectDB();
        console.log("Database Connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start the server:", error.message);
        process.exit(1); // Exit process on failure
    }
};

startServer();
