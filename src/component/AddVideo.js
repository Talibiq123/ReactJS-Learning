import "./AddVideo.css";
import { useState } from "react";

function AddVideo({addVideos}) {
  const [video, setVideo] = useState({
    verified: true,
    time: "7 months ago",
    channel: "Coder Dost",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(video);
    addVideos()
  }

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideo({...video,
      [e.target.name]: e.target.value
    })
    
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
      />
      <button
        onClick={handleSubmit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videos.length + 1,
        //       verified: true,
        //       title: "ExpressJS tutorial",
        //       views: "830K",
        //       time: "7 months ago",
        //       channel: "Coder Dost",
        //     },
        //   ]);
        // }}
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
