import "./App.css";
import Video from "./component/Video";
import videos from './data/data'

function App() {
  return (
    <div className="App">
      <div>Videos</div>
      {
        videos.map(video =>
          (<Video key={video.id} verified={video.verified} title={video.title} views={video.views} time={video.time} channel={video.channel} id={video.id}></Video>))
      }
    </div>
  );
}

export default App;
