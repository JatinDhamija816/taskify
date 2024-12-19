import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { generateTokens } from '../utils/tokenUtils.js';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if all fields are provided
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
            });
        }

        // Check if the email exists in the database
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (!existingUser) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials', // Generic message to prevent user enumeration
            });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials', // Generic message to prevent user enumeration
            });
        }

        // Generate both access and refresh tokens using the utility function
        const { accessToken, refreshToken } = generateTokens(existingUser._id, existingUser.email);

        // Send response with both tokens
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            accessToken, // Send access token
            refreshToken, // Send refresh token
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Internal Server Error',
        });
    }
};
