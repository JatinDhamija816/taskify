import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
    const [sideButton, setSideButton] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Navbar */}
            <div className="flex justify-between items-center bg-gray-800 py-4 px-6 shadow-md">
                <div>
                    <h1 className="text-2xl font-bold text-white italic font-mono">
                        taskify
                    </h1>
                </div>

                {/* Side Button */}
                <div
                    onClick={() => setSideButton(!sideButton)}
                    className="md:hidden cursor-pointer"
                >
                    {sideButton ? (
                        <IoMdClose size={30} className="text-white" />
                    ) : (
                        <FaBars size={30} className="text-white" />
                    )}
                </div>

                {/* Navbar Buttons (visible on desktop) */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/register">
                        <button className="navDesktopBtn">
                            Register
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="navDesktopBtn">
                            Login
                        </button>
                    </Link>
                </div>
            </div>

            {/* Side Menu (for mobile) */}
            {sideButton && (
                <div className="bg-gray-800 md:hidden text-white w-full">
                    <Link to="/register">
                        <button className="navMobileBtn">
                            Register
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="navMobileBtn">
                            Login
                        </button>
                    </Link>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-grow flex justify-center items-center text-center">
                <h2 className="text-3xl font-semibold text-gray-800">
                    Welcome to Taskify!
                </h2>
            </div>
        </div>
    );
};

export default Home;
