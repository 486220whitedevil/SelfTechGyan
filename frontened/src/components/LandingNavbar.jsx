import { Link } from "react-router-dom";

const LandingNavbar = () => {
  const isLoggedIn = () =>{
        return !!localStorage.getItem("token")
    }
  return (
    <nav className="h-20 w-full flex items-center justify-between px-10 bg-gray-900 border-b border-gray-800">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-yellow-500">
        SelfTechGyan 🤖
      </h1>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <Link
          to={isLoggedIn() ? '/home' : '/login'}
          className="px-6 py-2 text-white border border-yellow-500 rounded-lg
          hover:bg-yellow-500 hover:text-black transition-all duration-300"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-6 py-2 bg-yellow-500 text-black rounded-lg
          hover:bg-yellow-600 transition-all duration-300"
        >
          Register
        </Link>
        <Link
          to="/admin"
          className="px-6 py-2 bg-red-500 text-black rounded-lg
          hover:bg-red-700 transition-all duration-300"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
