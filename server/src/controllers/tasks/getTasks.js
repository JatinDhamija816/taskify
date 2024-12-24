import Task from "../../models/Task.js";
import { verifyToken } from "../../utils/verifyToken.js";

export const getTasks = async (req, res) => {
    try {
        const authToken = req.cookies.accessToken;

        if (!authToken) {
            // If no token is found, user is not logged in
            return res.status(200).json({
                message: 'no token is found',
                isLoggedIn: false,
            });
        }

        // Verify the token
        const userData = verifyToken(authToken);

        if (!userData) {
            // If token is invalid, user is not logged in
            return res.status(200).json({
                message: 'token is Invalid',
                isLoggedIn: false
            });
        }

        const tasks = await Task.find({ userId: userData.userId });

        if (tasks) {
            return res.status(200).json({
                success: true,
                message: 'Tasks',
                tasks
            });
        }

        return res.status(400).json({
            success: false,
            message: 'Error fetching tasks',
            error: err
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}