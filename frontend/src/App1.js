import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UploadForm from "./components/UploadForm";
import UploadsList from "./components/UploadsList";
const BACKEND_URI = "http://localhost:4000";

const App1 = () => {
  const [medias, setMedias] = useState([]);
  // const [showVideos, setShowVideos] = useState(false);
  console.log(`${BACKEND_URI}/api/v1/media/all`)

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };

  // const handleShowVideos = () => {
  //   setShowVideos(true);
  // };

  return (
    <>
      <UploadForm getAllMedias={getAllMedias} />
      {/* <UploadsList medias={medias} /> */}
      {/* <UploadForm getAllMedias={getAllMedias} />
      <button onClick={handleShowVideos}>Show Videos</button>
      {showVideos && <UploadsList medias={medias} />} */}
    </>
  );
};

export default App1;
