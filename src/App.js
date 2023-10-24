import { useReducer, useState } from 'react';
import './App.css';
import AddVideo from './component/AddVideo';
import videoDB from './data/data';
import VideoList from './component/VideoList';
function App() {
  console.log('render App');

  function videoReducer(videos, action) { 
    switch(action.type) {
      case 'ADD' :
        return [
            ...videos,
            {...action.payload, id: videos.length+1}
          ]
      case 'DELETE' : 
        return videos.filter(video=>video.id!==action.payload);
      case 'UPDATE' :
        return 
      default :
      return videos; 
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  // const [videos,setVideos] = useState(videoDB);

  const [editableVideo,setEditableVideo] = useState(null);

  function addVideos(video){
      dispatch({type: 'ADD', payload: video})
  }
  function deleteVideo(id){
    dispatch({type: 'DELETE', payload: id})
    // setVideos(videos.filter(video=>video.id!==id))
  }
  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }

  function updateVideo(video){
    const index = videos.findIndex(v=>v.id===video.id)
    const newVideos = [...videos]
    newVideos.splice(index,1,video)
    // setVideos(newVideos)
  }

  return (
    <div className="App" onClick={()=>console.log('App')}>
       <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
       <VideoList deleteVideo={deleteVideo} editVideo={editVideo}  videos={videos}></VideoList>


    </div>
  );
}

export default App;