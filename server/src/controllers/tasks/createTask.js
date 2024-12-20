import { verifyToken } from "../../utils/verifyToken.js";
import Task from '../../models/Task.js';

export const createTask = async (req, res) => {

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

        const { title, description, dueDate, priority, status } = req.body;

        const newTask = new Task({
            title,
            description,
            dueDate,
            priority,
            status,
            userId: userData.userId
        });
        await newTask.save();

        res.status(201).json({
            success: true,
            message: 'Task Created Successful',
            newTask
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'Internal Server Error'
        })
    }
}