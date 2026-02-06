import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/channel", async (req, res) => {
  const { channelId } = req.query;

  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      params: {
        part: "snippet",
        id: channelId,
        key: process.env.YOUTUBE_API_KEY,
      },
    }
  );

  res.json(response.data.items[0]);
});



router.get("/videos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet",
          playlistId: process.env.UPLOADS_PLAYLIST_ID,
          maxResults: 20,
          key: process.env.YOUTUBE_API_KEY,
        },
      }
    );

    const videos = response.data.items; // ✅ yahin define hua
    res.json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch videos" });
  }
});


router.get("/playlists", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlists",
      {
        params: {
          part: "snippet",
          channelId: process.env.YOUTUBE_CHANNEL_ID,
          maxResults: 20,
          key: process.env.YOUTUBE_API_KEY,
        },
      }
    );

    res.json(response.data.items);
  } catch (error) {
    console.log("YOUTUBE ERROR 👉", error.response?.data || error.message);
    res.status(500).json({ error: "failed to load videos" });
  }
});

router.get("/playlist/:playlistId", async (req, res) => {
  try {
    const { playlistId } = req.params;

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet",
          playlistId: playlistId,
          maxResults: 50,
          key: process.env.YOUTUBE_API_KEY,
        },
      }
    );

    res.json(response.data.items);
  } catch (error) {
    console.log(
      "PLAYLIST VIDEOS ERROR 👉",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "failed to load playlist videos" });
  }
});

export default router;

