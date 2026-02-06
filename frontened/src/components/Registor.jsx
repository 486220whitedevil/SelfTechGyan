import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/auth/register", form);
      alert("Registered Successfully 🎉");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
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
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-400 mb-8">
          Start your AI learning journey today
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-gray-700 text-white
            focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-gray-700 text-white
            focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-gray-700 text-white
            focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />

          <button
            type="submit"
            className="mt-4 bg-yellow-500 text-black py-3 rounded-lg font-semibold
            hover:bg-yellow-600 hover:scale-105 transition-all duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
