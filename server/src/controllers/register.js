import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { generateTokens } from '../utils/tokenUtils.js';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Trim all fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Email Validation Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
            });
        }

        // Password Validation Regex (example: at least 6 characters, one number, one special character)
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 6 characters long, contain a number, and a special character',
            });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already in use',
            });
        }

        // Hash Password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create User
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
        });

        // Generate both access and refresh tokens using the utility function
        const { accessToken, refreshToken } = generateTokens(user._id, user.email);

        // Send response with both tokens
        return res.status(201).json({
            success: true,
            message: 'User Registered Successfully',
            accessToken, // Send access token
            refreshToken, // Send refresh token
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Internal Server Error'
        });
    }
};
