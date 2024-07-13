import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./css/Uploadpdf.css";
import { useNavigate } from 'react-router-dom';
const BACKEND_URI = "http://localhost:5000";

const UploadVideo = ({ onSubmit }) => {
    const [Vtitle, VsetTitle] = useState('');
    const [Vfile, VsetFile] = useState('');
    const [VallImages, VsetAllImages] = useState(null);

    const [videos, setVideos] = useState([]);
    const [allVideos, setAllVideos] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     getVideo();
    // }, []);

    // const getVideo = async () => {
    //     const result = await axios.get("http://localhost:5000/api/getVideos");
    //     console.log(result.data.data);
    //     VsetAllImages(result.data.data);
    // }cd cd

    const submitImage = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("title", Vtitle);
        formdata.append("file", Vfile);
        console.log(Vtitle, Vfile);
        console.log("sending video")
        const result = await axios.post("http://localhost:5000/api/Uploadvideos", formdata, { headers: { "Content-Type": "multipart/form-data" }, });
        console.log("video has been sent ");
        console.log(result);

        if (result.data.status === "ok") {
            alert("Uploaded Successfully!!!");
            // getVideo();
            onSubmit();  // Call the onSubmit prop here 
        }
    };
    // const showVideo = (video) => {
    //     window.open(`http://localhost:5000/api/videos/${video}`, "_blank", "noreferrer");
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
    
        let formData = new FormData();
        for (let key in videos) {
          formData.append("videos", videos[key]);
        }
        // formData.append("name", name);
    
        axios
          .post(`${BACKEND_URI}/api/v1/media/create`, formData)
          .then((response) => {
            getAllVideos();
            alert("Submitted successfully");
          })
          .catch((error) => {
            console.log(error);
            alert("Error happened!");
          });
      };

      
    
    //   const navigateToVideos = () => {
    //     navigate(`/videos`, { state: { videos: allVideos } });
    //   };


      const navigateToVideos = () => {
        const url = `${BACKEND_URI}/api/v1/media`;
        window.open(url, "_blank");  // Open videos in a new tab
    };

    
      const getAllVideos = async () => {
        try {
          const result = await axios.get(`${BACKEND_URI}/api/v1/media`);
          setAllVideos(result.data.data);
        } catch (error) {
          console.error('Error fetching videos:', error);
        }
      };
    
      useEffect(() => {
        getAllVideos();
      }, []);
    

    // const navigateToVideos = () => {
    //     navigate(`/videos`, { state: { videos: allVideos } });
    //   };
    

    // const showVideo = (video) => {
        // window.open(`http://localhost:5000/api/videos/${video}`, "_blank", "noreferrer");
    // }

    return (
        <div className="uploadpdf">
            {/* <h1>hello</h1> */}
            <form className="pdfform" onSubmit={submitImage}>
                <h4>Upload Video</h4>
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control pt-2 mt-2 " onChange={(e) => VsetTitle(e.target.value)} placeholder="Title" id="title" required />
                <input type="file" className="form-control mt-4" id="file" accept="mp4/mp3" required onChange={(e) => VsetFile(e.target.files[0])} />
                <button className="btn btn-dark mt-3" type="submit">Submit</button>


                <button className="btn btn-primary mt-5" onClick={navigateToVideos} style={{ marginLeft: "12px" }}>
            View
          </button>


                {/* <button className="btn btn-dark" onClick={() => showVideo(data.video)}>Show Video</button> */}
            </form>

            {/* <div className="uploaded">
                <h4>Uploaded Video:</h4>
                <div className="output-div">
                    {VallImages == null ? "" : VallImages.map((data) => {
                        return (
                            <div className="inner-div">
                                <h6>Title: {data.title}</h6>
                                <button className="btn btn-dark" onClick={() => showVideo(data.video)}>Show Video</button>
                            </div>
                        );
                    })}
                </div>
            </div> */}

            {/* <div className="uploaded">
                <h4>Uploaded Video:</h4>
                <div className="output-div">
                    {VallImages == null ? "" : VallImages.map((data) => {
                        return (
                            <div className="inner-div">
                                <h6>Title: {data.title}</h6>
                                <button className="btn btn-dark" onClick={() => showVideo(data.video)}>Show Video</button>
                            </div>
                        );
                    })}
                </div>
            </div> */}
        </div>
    );
}
export default UploadVideo;