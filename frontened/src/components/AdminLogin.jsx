import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAdmin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/admin/login", {
        email,
        password
      });

      // Backend se token aaya to login success
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("role", "admin");

      navigate("/admin"); // dashboard
    } catch (err) {
      alert(err.response?.data?.message || "Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={loginAdmin}
        className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col gap-4 w-80"
      >
        <h2 className="text-2xl font-bold text-yellow-500 text-center mb-4">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

