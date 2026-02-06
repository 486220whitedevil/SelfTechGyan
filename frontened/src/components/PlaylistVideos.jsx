import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const PlaylistVideos = () => {
  const { playlistId } = useParams();
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/youtube/playlist/${playlistId}`)
      .then((res) => setVideos(res.data));
  }, [playlistId]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 px-6 py-10">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-10">
          Playlist Videos 🎥
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v) => {
            const id = v.snippet.resourceId.videoId;
            return (
              <div
                key={id}
                onClick={() => navigate(`/watch/${id}`)}
                className="bg-gray-800 p-4 rounded-xl cursor-pointer hover:scale-105 transition"
              >
                <img
                  src={v.snippet.thumbnails.medium.url}
                  className="rounded-lg mb-3"
                />
                <h2 className="text-lg font-semibold text-white line-clamp-2">
                  {v.snippet.title}
                </h2>
                <p className="text-sm text-gray-400">
                  {v.snippet.channelTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PlaylistVideos;
