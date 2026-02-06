import YouTube from "react-youtube";

const Video = ({ videoId }) => {
  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 0,
      rel: 0, // try to reduce unrelated videos
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default Video;
