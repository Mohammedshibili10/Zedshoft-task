import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function TaskBoard() {
    const [tasks, setTasks] = useState([]);
    const [done, setDone] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
        <div className="flex min-h-screen bg-gray-100 font-sans text-gray-800">

            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setSidebarOpen(false)} ></div>
            )}

            <div className="flex-1 flex flex-col md:ml-64 ">
                <Navbar setSidebarOpen={setSidebarOpen} />
                 
                 <h1 className="flex items-center text-2xl md:text-4xl font-semibold pl-6 py-4 md:py-10">Tasks  </h1>
                <div className="p-6  overflow-auto">


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                            <p className="text-xl font-bold text-blue-600">{done}</p>
                            <p className="text-gray-700 text-sm mt-1">Tasks Done</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
                            <p className="text-xl font-bold text-red-500">{remaining}</p>
                            <p className="text-gray-700 text-sm mt-1">Tasks Remaining</p>
                        </div>
                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tasks.map((task) => (
                            <Link key={task.id} to={`/tododetails`}>
                                <div className={`bg-white rounded-2xl shadow p-5 hover:shadow-lg transition border-t-4 ${task.completed ? "border-blue-400" : "border-transparent"}`}>
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                                            U{task.userId}
                                        </div>
                                        <span className={`text-xs px-3 py-1 rounded-full ${task.completed ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-700"}`}>
                                            {task.completed ? "Done" : "Pending"}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-800 mb-4">{task.title}</h3>
                                    <div className="flex justify-between text-xs text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <span className={`w-2 h-2 rounded-full ${task.completed ? "bg-blue-500" : "bg-gray-400"}`}></span>
                                            {task.completed ? "Completed" : "In progress"}
                                        </div>
                                        <span>User {task.userId}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}