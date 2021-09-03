import React, {useState, useEffect} from 'react';
import './App.css';
import Video from './Video';
import axios from './axios'

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data)

      return response
    }

    fetchPosts()
  }, [])
  
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({ _id, url, channel, description, song, likes, messages, shares }) => (
          <Video 
          key={_id}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          url={url} />
        ))}
        
      </div>

    </div>
  );
}

export default App;
