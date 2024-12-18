import { useState } from "react";

const Register = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm px-8 py-6 shadow-lg rounded-lg bg-white"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Register
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-600 mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-600 mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-600 mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-md shadow-lg hover:bg-blue-600 transition"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
