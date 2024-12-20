import jwt from 'jsonwebtoken';

export const verifyToken = (token) => {
    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        return decoded; // Return the decoded payload if valid
    } catch (error) {
        console.error("Token verification failed:", error.message);
        return null; // Return null if the token is invalid
    }
};