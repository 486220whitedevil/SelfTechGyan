
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Registor'
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Courses from './components/Courses';
import LandingHome from './components/LandingHome';
import AdminDashboard from './components/AdminDashboard';
import AdminRoute from './routes/AdminRoute';
import AdminLogin from './components/AdminLogin';
import VideoPlayerPage from './components/VideoPlayerPage';
import Footer from './components/Footer';
import PlaylistVideos from './components/PlaylistVideos';


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
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path='/watch/:videoId' element={<VideoPlayerPage/>} />
        <Route path="/playlist/:playlistId" element={<PlaylistVideos />} />

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
