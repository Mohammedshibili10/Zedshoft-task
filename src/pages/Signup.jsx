import { Facebook, Mail, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="flex flex-col md:flex-row w-full max-w-2xl md:max-w-4xl rounded-3xl shadow-2xl overflow-hidden">

                <div className="w-full md:w-1/2 bg-white p-6 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">Sign Up</h2>


                    <div className="flex gap-3 mb-4">
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

                    <p className="text-sm text-gray-500 mb-4 text-center md:text-left">Or use your email account</p>


                    <form className="flex flex-col gap-3">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-300 w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-300 w-full"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-300 w-full"
                        />

                        <Link to="/todo">
                            <button className="mt-3 p-3 rounded-xl bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition w-full">
                                Sign Up
                            </button>
                        </Link>
                    </form>

                    <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
                        Already have an account?{" "}
                        <Link to="/login" className="underline font-medium">Sign In</Link>
                    </p>
                </div>


                <div className="hidden md:flex w-full md:w-1/2 bg-linear-to-br from-blue-500 to-blue-600 text-white flex-col justify-center items-center p-6 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Hello, Friend!</h2>
                    <p className="text-center text-sm md:text-base mb-6 max-w-xs md:max-w-full">
                        Enter your personal details and start your journey with us
                    </p>
                    <Link to="/signup">
                        <button className="border border-white rounded-full px-6 md:px-8 py-2 hover:bg-white hover:text-blue-600 transition text-sm md:text-base">
                            SIGN IN
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}