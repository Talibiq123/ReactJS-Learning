import "./App.css";
import PlayButton from "./component/PlayButton";
import Video from "./component/Video";
import videos from "./data/data";

function App() {
  return (
    <div className="App">
      <div>Videos</div>
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
    </div>
  );
}

export default App;
