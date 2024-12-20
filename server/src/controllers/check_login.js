import { verifyToken } from "../utils/verifyToken.js";

// Endpoint to check login status
export const check_login = async (req, res) => {
    try {
        // Get the authToken cookie
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

        // Token is valid; user is logged in
        return res.status(200).json({
            isLoggedIn: true,
            user: userData
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'Internal Server Error'
        })
    }
}