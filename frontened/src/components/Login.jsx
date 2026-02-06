import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.username);
     
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      {/* Card */}
      <div
        className="w-full max-w-md bg-gray-800 p-10 rounded-2xl shadow-xl
        transform transition-all duration-700 hover:scale-[1.02]"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-2 animate-pulse">
          Start AI Journey 👋
        </h2>

        <p className="text-center text-gray-400 mb-8">
          Login to continue learning AI
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-3 rounded-lg bg-gray-700 text-white
            focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg bg-gray-700 text-white
            focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="mt-4 bg-yellow-500 text-black py-3 rounded-lg font-semibold
            hover:bg-yellow-600 hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-400 text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
