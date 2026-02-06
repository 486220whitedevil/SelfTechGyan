import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Video from "./Video.jsx";

export default function VideoPlayerPage() {
  const { videoId } = useParams(); // 👈 URL se aaya
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(videoId);
  const [channel, setChannel] = useState(null);


  useEffect(() => {
    axios.get("/api/youtube/videos").then((res) => {
      setVideos(res.data);

      // Agar URL me videoId nahi hai to first video play
      if (!videoId && res.data.length > 0) {
        setCurrentVideo(res.data[0].snippet.resourceId.videoId);
      }
    });
  }, [videoId]);

  useEffect(() => {
    if (!currentVideo || videos.length === 0) return;

    const activeVideo = videos.find(
      (v) => v.snippet.resourceId.videoId === currentVideo
    );

    if (!activeVideo) return;

    axios
      .get("/api/youtube/channel", {
        params: {
          channelId: activeVideo.snippet.channelId,
        },
      })
      .then((res) => {
        setChannel(res.data);
      });
  }, [currentVideo, videos]);


  return (
    <div className="h-screen bg-neutral-950 text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MAIN PLAYER */}
        <div className="lg:col-span-2">
          {currentVideo && <Video videoId={currentVideo} />}
         

          <h2 className="mt-4 text-lg font-semibold">
            {videos.find(
              (v) => v.snippet.resourceId.videoId === currentVideo
            )?.snippet.title}
          </h2>
           {channel && (
          <div className="mt-6 flex items-start gap-4 border-b border-neutral-800 pb-6">
            <img
              src={channel.snippet.thumbnails.default.url}
              alt="channel"
              className="w-12 h-12 rounded-full"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-base mt-4">
                {channel.snippet.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-1 line-clamp-2">
                {channel.snippet.description}
              </p>
            </div>

            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-semibold">
              Subscribe
            </button>
          </div>
        )}
        </div>
        {/* CHANNEL INFO */}
        


        {/* SIDEBAR */}
        <aside className="space-y-4 overflow-y-auto h-[calc(100vh-3rem)] pr-2 hide-scrollbar">
          {videos.map((v) => {
            const id = v.snippet.resourceId.videoId;
            return (
              <div
                key={id}
                className="flex gap-3 cursor-pointer"
                onClick={() => setCurrentVideo(id)}
              >
                <img
                  src={v.snippet.thumbnails.medium.url}
                  className="w-40 h-24 rounded-lg"
                />
                <div>
                  <p className="text-sm font-medium line-clamp-2">
                    {v.snippet.title}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {v.snippet.channelTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </aside>
      </div>
    </div>
  );
}
