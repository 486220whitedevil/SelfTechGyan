
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Registor'
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Courses from './components/Courses';
import LandingHome from './components/LandingHome';
import Logout from './components/Logout';
import AdminDashboard from './components/AdminDashboard';
import AdminRoute from './routes/AdminRoute';
import AdminLogin from './components/AdminLogin';
import CallbackForm from './components/Callback';


const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-900 '>
      <Routes>
        <Route path='/' element={<LandingHome/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/about" element={<About />} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/callback" element={<CallbackForm/>} />

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
      </Routes>
    </div>
  )
}

export default App
