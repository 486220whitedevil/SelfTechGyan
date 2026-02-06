import LandingNavbar from "./LandingNavbar";
import { useNavigate } from "react-router-dom";

const LandingHome = () => {

    const navigate = useNavigate()

    const isLoggedIn = () =>{
        return !!localStorage.getItem("token")
    }

    const handleGetStarted = () => {
        if(isLoggedIn()){
            navigate('/home')
        }else{
            navigate('/login')
        }
    }
  return (
    <>
      <LandingNavbar />

      <section className="min-h-screen bg-gray-900 flex items-center px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Learn <span className="text-yellow-500">AI & Machine Learning</span>
              <br /> Smarter & Faster 🚀
            </h1>

            <p className="text-gray-300 text-lg">
              Build real-world AI skills with hands-on projects, interactive
              lessons, and expert guidance — all in one platform.
            </p>

            <div className="flex gap-6 pt-4">
              <a
              onClick={handleGetStarted}
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold
                hover:bg-yellow-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Start Learning
              </a>

              <a
                href={isLoggedIn ? '/home' : '/login'}
                className="border border-yellow-500 px-8 py-3 rounded-lg
                hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all duration-300"
              >
                Login
              </a>
              
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
              alt="AI Illustration"
              className="w-80 animate-bounce"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default LandingHome;
