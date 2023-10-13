import "./App.css";
import Video from "./component/Video";

function App() {
  let obj = {
    id: 1,
    title: "React JS tutorial",
    views: "999K",
    time: "1 year ago",
    channel: "Coder Dost",
    verified: false,
  };
  return (
    <div className="App">
      <div>Videos</div>
      <Video {...obj}></Video>
      <Video id="3" title="Node JS tutorial" views="100K" time="1 month ago" verified={true}></Video>
      <Video
        id = "2"
        title="Mongo DB tutorial"
        views="1M"
        time="1 month ago"
        channel="Coder Dost"
        verified={false}
      ></Video>
    </div>
  );
}

export default App;
