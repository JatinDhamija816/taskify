export const logout = async (req, res) => {
    // Clear the authToken cookie
    try {
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: false, // Use true if your app is served over HTTPS
            sameSite: "strict",
            expires: new Date(0),
        });

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: false, // Use true if your app is served over HTTPS
            sameSite: "strict",
            expires: new Date(0),
        });

        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'Internal Server Error'
        })
    }
}
