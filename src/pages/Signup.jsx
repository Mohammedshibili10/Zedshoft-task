import { Facebook, Mail, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="flex w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">

     
        <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>

          <div className="flex gap-3 mb-6">
            <button className="flex-1 flex justify-center items-center py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <Facebook />
            </button>
            <button className="flex-1 flex justify-center items-center py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
         <Mail />
            </button>
            <button className="flex-1 flex justify-center items-center py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <Phone />
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-4">Or use your email account</p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-300 transition"
            />

            <Link to="/todo">
              <button className="mt-3 p-3 rounded-xl bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition">
                Sign Up
              </button>
            </Link>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="underline font-medium">Sign In</Link>
          </p>
        </div>

   
        <div className="w-1/2 bg-linear-to-br from-blue-500 to-blue-600 text-white flex flex-col justify-center items-center p-12">
          <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
          <p className="text-center mb-6">
            Enter your personal details and start your journey with us
          </p>
          <Link to="/signup">
            <button className="border border-white rounded-full px-8 py-2 hover:bg-white hover:text-blue-600 transition">
              SIGN IN
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}