import "./App.css";
import PlayButton from "./component/PlayButton";
import Video from "./component/Video";
import Counter from "./component/Counter";
import videoDB from "./data/data";
import { useState } from "react";

function App() {

  const [videos, setVideos] = useState(videoDB);

  return (
    <div className="App">
      <div>
        <button onClick={() => {
          setVideos( [...videos, {  id:videos.length + 1,
            verified: true,
            title: "ExpressJS tutorial",
            views: "830K",
            time: "7 months ago",
            channel: "Coder Dost",
          }]);
        }}>Add Video</button>       
      </div>
      {videos.map((video) => (
        <Video
          key={video.id}
          verified={video.verified}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("play", video.title)}
            onPause={() => console.log("pause", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/*<PlayButton message="pause-msg" onClick={() => console.log('pause')}>Pause</PlayButton>*/}
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
