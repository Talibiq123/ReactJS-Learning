import "./App.css";
import PlayButton from "./component/PlayButton";
import Video from "./component/Video";
import { useState } from "react";
import videoDB from "./data/data";
import AddVideo from "./component/AddVideo";
/*import Counter from "./component/Counter";*/


function App() {

  const [videos, setVideos] = useState(videoDB);

  return (
    <div className="App">

      <AddVideo addVideos={setVideos}></AddVideo>

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
      {/*<Counter></Counter>*/}
    </div>
  );
}

export default App;
