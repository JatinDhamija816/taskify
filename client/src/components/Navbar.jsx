import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { check_login, logout } from "../utils/apiCalls";
import NewTaskModal from "./NewTaskModal";

const Navbar = () => {
    const [sideButton, setSideButton] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const res = await check_login()
                setIsLoggedIn(res.data.isLoggedIn);
            } catch (error) {
                setIsLoggedIn(false);
                console.log(error.message)
            }
        };

        checkLoginStatus();
    }, []);

    const handleLogout = async () => {
        try {
            await logout()
            setIsLoggedIn(false);
        } catch (error) {
            alert('Logout failed', error)
            console.error("Logout failed:", error);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const closeSideBar = () => {
        setSideButton(false)
    }

    return (
        <div>
            <div className="flex justify-between items-center bg-gray-800 py-4 px-6 shadow-md">
                <div>
                    <h1 className="text-2xl font-bold text-white italic font-mono">
                        taskify
                    </h1>
                </div>

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
                    {isLoggedIn ? (
                        <>
                            <button onClick={openModal} className="navDesktopBtn">+ New Task</button>
                            <button
                                onClick={handleLogout}
                                className="navDesktopBtn bg-red-500 hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/register">
                                <button className="navDesktopBtn">Register</button>
                            </Link>
                            <Link to="/login">
                                <button className="navDesktopBtn">Login</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Side Menu (for mobile) */}
            {sideButton && (
                <div className="bg-gray-800 md:hidden text-white w-full">
                    {isLoggedIn ? (
                        <>
                            <button onClick={openModal} className="navMobileBtn">+ New Task</button>
                            <button
                                onClick={handleLogout}
                                className="navMobileBtn bg-red-500 hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/register">
                                <button className="navMobileBtn">Register</button>
                            </Link>
                            <Link to="/login">
                                <button className="navMobileBtn">Login</button>
                            </Link>
                        </>
                    )}
                </div>
            )}

            <NewTaskModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                closeSide={closeSideBar}
            />
        </div>
    );
};

export default Navbar;