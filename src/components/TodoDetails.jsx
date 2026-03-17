import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function TodoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);

  if (!todo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-100 to-blue-200">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading Task...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center p-6">

      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/40">


        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-md">
              U{todo.userId}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Task #{todo.id}
              </h2>
              <p className="text-sm text-gray-500">
                User {todo.userId} assigned task
              </p>
            </div>
          </div>

          <span
            className={`px-4 py-1 text-sm rounded-full font-medium shadow
            ${todo.completed
                ? "bg-blue-100 text-blue-600"
                : "bg-blue-50 text-blue-500"
              }`} >
            {todo.completed ? "Completed" : "Pending"}
          </span>
        </div>


        <div className="bg-blue-50 rounded-2xl p-6 border mb-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            {todo.title}
          </p>
        </div>


        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-100 p-4 rounded-xl text-center">
            <p className="text-sm text-gray-500">Todo ID</p>
            <p className="font-bold text-blue-600 text-lg">{todo.id}</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-xl text-center">
            <p className="text-sm text-gray-500">User ID</p>
            <p className="font-bold text-blue-600 text-lg">{todo.userId}</p>
          </div>
        </div>


        <button
          onClick={() => navigate("/todo")}
          className="w-full py-3 rounded-xl bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold hover:scale-105 transition" >
          ← Back to Task Board
        </button>

      </div>
    </div>
  );
}