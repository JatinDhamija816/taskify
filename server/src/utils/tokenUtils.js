import jwt from 'jsonwebtoken';

// Function to generate access and refresh tokens
export const generateTokens = (userId, email) => {
    const accessTokenExpiration = process.env.JWT_ACCESS_EXPIRATION || '1h'; // Default to '1h' if not specified
    const refreshTokenExpiration = process.env.JWT_REFRESH_EXPIRATION || '7d'; // Default to '7d' if not specified

    // Generate Access Token
    const accessToken = jwt.sign(
        { userId, email },
        process.env.JWT_ACCESS_SECRET, // Secret key for access token
        { expiresIn: accessTokenExpiration } // Access token expiration from .env
    );

    // Generate Refresh Token
    const refreshToken = jwt.sign(
        { userId, email },
        process.env.JWT_REFRESH_SECRET, // Secret key for refresh token
        { expiresIn: refreshTokenExpiration } // Refresh token expiration from .env
    );

    return { accessToken, refreshToken };
};
