import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideosList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/getVideos');
      setVideos(result.data.data); // Assuming backend returns an array of video objects
    } catch (error) {
      console.error('Error fetching videos:', error);
      alert('Error fetching videos');
    }
  };

  const showVideo = (video) => {
    window.open(`http://localhost:5000/api/videos/${video}`, '_blank', 'noreferrer');
  };

  const deleteVideo = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:5000/api/delete-video/${id}`);
      if (result.data.status === 'ok') {
        setVideos(videos.filter((video) => video._id !== id));
      } else {
        alert('Failed to delete the video');
      }
    } catch (error) {
      console.error('There was an error deleting the video!', error);
      alert('There was an error deleting the video!');
    }
  };

  return (
    <div className="uploaded">
      <h4>Uploaded Videos:</h4>
      <div className="container">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th style={{ paddingLeft: '100px' }}>Video Title</th>
              <th style={{ paddingLeft: '100px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((data, index) => (
              <tr key={index}>
                <td style={{ paddingLeft: '100px' }}>{data.title}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => showVideo(data.video)}
                    style={{ marginRight: '10px' }}
                  >
                    View
                  </button>
                  <button className="btn btn-danger" onClick={() => deleteVideo(data._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideosList;
