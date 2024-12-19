import { useState } from "react";
import { FaEye, FaRegEye } from "react-icons/fa";
import AuthLink from "./AuthLink";
import { login } from "../utils/apiCalls";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make the login request
            const res = await login(user); // Assuming `login` is an API call function
            const { message } = res.data;
            console.log(res)
            console.log(message); // Log the success message


            alert('Login successful');
            // Redirect user or perform other actions
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm px-8 py-6 shadow-lg rounded-lg bg-white"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Login
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="label"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="input"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="label"
                    >
                        Password
                    </label>
                    <div className="passwordInput">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="outline-none w-full"

                        />
                        <div onClick={() => setShowPassword(!showPassword)} className="text-xl">
                            {showPassword ? <FaRegEye /> : <FaEye />}
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="submitBtn"
                >
                    Login
                </button>

                <AuthLink
                    text="Create a new Account?"
                    linkText="Register here"
                    to="/register"
                />
            </form>
        </div>
    );
};

export default Login;
