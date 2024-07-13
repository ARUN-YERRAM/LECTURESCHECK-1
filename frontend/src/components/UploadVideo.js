import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Uploadpdf.css";
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const BACKEND_URI = "http://localhost:5000";

const UploadVideo = ({ onSubmit }) => {
    const [Vtitle, VsetTitle] = useState('');
    const [Vfile, VsetFile] = useState(null);
    const [allVideos, setAllVideos] = useState(null);
    const navigate = useNavigate();

    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", Vtitle);
        formData.append("file", Vfile);

        try {
            const result = await axios.post(`${BACKEND_URI}/api/Uploadvideos`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (result.data.status === "ok") {
                // toast.success("Uploaded Successfully!!!");
                onSubmit();  // Call the onSubmit prop here 
                getAllVideos();
            }
        } catch (error) {
            console.error("Error uploading video:", error);
            // toast.error("Error uploading video.");
        }
    };

    const getAllVideos = async () => {
        try {
            const result = await axios.get(`${BACKEND_URI}/api/v1/media`);
            setAllVideos(result.data.data);
        } catch (error) {
            console.error('Error fetching videos:', error);
            // toast.error('Error fetching videos.');
        }
    };
    useEffect(() => {
        getAllVideos();
    }, []);

    
    const navigateToVideos = () => {
        // const url = `${BACKEND_URI}/api/getVideos`;
        window.open("/videos", "_blank");
    };

    // const navigateToPdfList = () => {
      // window.open("/lot", "_blank");
    // };
  
  

    return (
        <div className="uploadpdf">
            {/* <ToastContainer /> */}
            <form className="pdfform" onSubmit={submitImage}>
                <h4>Upload Video</h4>
                <label htmlFor="title">Title:</label>
                {/* <input
                    type="text"
                    className="form-control pt-2 mt-2"
                    onChange={(e) => VsetTitle(e.target.value)}
                    placeholder="Title"
                    id="title"
                    required
                />
                <input
                    type="file"
                    className="form-control mt-4"
                    id="file"
                    accept="video/mp4,video/mpeg"
                    required
                    onChange={(e) => VsetFile(e.target.files[0])}
                /> */}

<input type="text" className="form-control pt-2 mt-2 " onChange={(e) => VsetTitle(e.target.value)} placeholder="Title" id="title" required />
<input type="file" className="form-control mt-4" id="file" accept="mp4/mp3" required onChange={(e) => VsetFile(e.target.files[0])} />
                
                <button className="btn btn-dark mt-3" type="submit">Submit</button>
                <button
                    className="btn btn-primary mt-5"
                    onClick={navigateToVideos}
                    style={{ marginLeft: "12px" }}
                >
                    View
                </button>
            </form>



            
        </div>
    );
};


export default UploadVideo;
