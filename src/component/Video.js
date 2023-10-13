import "./Video.css";

function Video({id, title, channel = "Coder Dost", views, time, verified}) {
  let channelJSX;
  if(verified) {
    channelJSX = <div className="channel">{channel} ✅</div>;
  } else {
    channelJSX = <div className="channel">{channel} </div>;
  }

  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        {channelJSX}
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
