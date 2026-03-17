import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TaskBoard() {
    const [tasks, setTasks] = useState([]);
    const [done, setDone] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => {
                setTasks(data);
                setDone(data.filter((task) => task.completed).length);
            });
    }, []);

    const remaining = tasks.length - done;

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex justify-center items-start bg-linear-to-br from-white via-gray-100 to-gray-200 p-6"
        >
            <div className="w-full max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="backdrop-blur-lg bg-white/70 border border-gray-200 shadow-2xl rounded-3xl py-6 px-10 flex justify-between items-center mb-10"
                >
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Task Board</h1>
                        <p className="text-gray-600 text-sm">Tracking {tasks.length} tasks</p>
                    </div>

                    <div className="bg-white/50 px-6 py-2 rounded-2xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition">
                        <p className="text-xl font-semibold text-blue-600">{done} Done</p>
                        <p className="text-sm text-gray-700 mt-1">{remaining} Remaining</p>
                    </div>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tasks.map((task, index) => (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to={`/tododetails`}>
                                <div
                                    className={`backdrop-blur-lg bg-white/60 border border-gray-200 p-5 rounded-3xl shadow hover:shadow-2xl transition ${task.completed ? "border-t-4 border-blue-400" : ""
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                                            U{task.userId}
                                        </div>
                                        <span
                                            className={`text-xs px-3 py-1 rounded-full ${task.completed
                                                ? "bg-blue-100 text-blue-600"
                                                : "bg-white/40 text-gray-700"
                                                }`}
                                        >
                                            {task.completed ? "Done" : "Pending"}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-800 mb-4">{task.title}</h3>
                                    <div className="flex justify-between text-xs text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <span
                                                className={`w-2 h-2 rounded-full ${task.completed ? "bg-blue-500" : "bg-gray-400"
                                                    }`}
                                            ></span>
                                            {task.completed ? "Completed" : "In progress"}
                                        </div>
                                        <span>User {task.userId}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}