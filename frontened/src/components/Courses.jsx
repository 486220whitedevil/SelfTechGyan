import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Courses = () => {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/youtube/playlists").then((res) => {
      console.log(res.data)
      setPlaylists(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 px-6 py-10">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-10">
          Our Courses 📚
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {playlists.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/playlist/${p.id}`)}
              className="bg-gray-800 p-4 rounded-xl cursor-pointer hover:scale-105 transition"
            >
              <img
                src={p.snippet.thumbnails.medium.url}
                className="rounded-lg mb-3"
              />
              <h2 className="text-lg font-semibold text-white">
                {p.snippet.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
