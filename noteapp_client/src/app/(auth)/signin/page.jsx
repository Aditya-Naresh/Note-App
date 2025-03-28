"use client"; 
import { useRouter } from "next/navigation";

import { useState } from "react";
import Link from "next/link";
import {loginUser} from "../../../store/authThunks.js"
import {useDispatch} from 'react-redux'

export default function SignIn() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch()
  const router = useRouter()
const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(loginUser(formData)).unwrap()
    .then((res) => {
      console.log("✅ Login Success:", res);
      if (res.access_token) {
        router.push("/dashboard")
      } else {
        console.log("❌ No Token in Response");
      }
    })
    .catch((err) => {
      console.error("❌ Login Error:", err);
    });
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Sign In</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
          Welcome back! Sign in to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="your_username"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

