import { useEffect, useState } from "react";
import { getTask } from "../utils/apiCalls";

const Main = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await getTask();
                setTasks(res.data.tasks);
            } catch (error) {
                console.error("Error fetching tasks:", error.message);
            }
        };

        fetchTasks();
    }, []);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-6">
            <div className="max-w-4xl mx-auto">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div
                            key={task._id}
                            className="my-4 border bg-white shadow-lg w-full px-6 py-4 rounded-xl"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h1 className="font-bold text-2xl text-gray-800">{task.title}</h1>
                                <span
                                    className={`px-3 py-1 text-sm font-semibold rounded ${task.priority === "High"
                                        ? "bg-red-100 text-red-600"
                                        : task.priority === "Medium"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-green-100 text-green-600"
                                        }`}
                                >
                                    {task.priority}
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4">{task.description}</p>
                            <div className="flex justify-between items-center text-gray-500 text-sm">
                                <p className="font-medium">
                                    Due:{" "}
                                    <p className="text-gray-800">{formatDate(task.dueDate)}</p>
                                </p>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                    />
                                    <p
                                        className={`ml-2 ${task.status === "Completed"
                                            ? "text-green-600"
                                            : "text-yellow-600"
                                            } font-semibold`}
                                    >
                                        {task.status}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex-grow flex justify-center items-center text-center mt-10">
                        <h2 className="text-4xl font-semibold text-gray-700">
                            Welcome to <span className="text-blue-600">Taskify</span>!
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Start by adding some tasks to stay organized.
                        </p>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Main;
