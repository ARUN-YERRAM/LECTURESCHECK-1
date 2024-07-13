// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
// import axios from "axios";
// import "./css/Uploadpdf.css";

// const UploadPDF = () => {
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState("");
//   const [allImage, setAllImage] = useState(null);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     getPdf();
//   }, []);

//   const getPdf = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/api/getfiles");
//       console.log(result.data.data);
//       setAllImage(result.data.data);
//     } catch (error) {
//       console.error("Error fetching PDFs:", error);
//       alert("Error fetching PDFs");
//     }
//   };

//   const submitImage = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("file", file);
//     console.log(title, file);
//     console.log("pdf is uploading");
//     try {
//       const result = await axios.post("http://localhost:5000/api/uploadfiles", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log("pdf is uploaded");
//       console.log(result);

//       if (result.data.status === "ok") {
//         alert("Uploaded Successfully!!!");
//         getPdf();
//       }
//     } catch (error) {
//       console.error("Error uploading PDF:", error);
//       alert("Error uploading PDF");
//     }
//   };

//   const showPdf = (pdf) => {
//     window.open(`http://localhost:5000/api/files/${pdf}`, "_blank", "noreferrer");
//   };

//   const navigateToGraph = () => {
//     navigate("/RelevanceChart");
//   };

//   return (
//     <>
//       <div className="uploadpdf">
//         <form className="pdfform" onSubmit={submitImage}>
//           <h4>Upload PDF</h4>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             className="form-control pt-2 mt-2"
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Title"
//             id="title"
//             required
//           />
//           <input
//             type="file"
//             className="form-control mt-4"
//             id="file"
//             accept="application/pdf"
//             required
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <button className="btn btn-dark mt-3" type="submit">
//             Submit
//           </button>
//           <button className="btn btn-dark mt-3 ml-2" type="button" onClick={navigateToGraph}>
//             Graph
//           </button>

//           <button
//                     className="btn btn-primary mt-5"
//                     onClick={showPdf}
//                     style={{ marginLeft: "12px" }}
//                 >
//                     View
//                 </button>
//         </form>
//         {/* <div className="uploaded">
//           <h4>Uploaded PDF:</h4>
//           <div className="output-div">
//             {allImage == null
//               ? ""
//               : allImage.map((data) => {
//                   return (
//                     <div className="inner-div" key={data._id}>
//                       <h6>Title: {data.title}</h6>
//                       <button className="btn btn-dark" onClick={() => showPdf(data.pdf)}>
//                         Show Pdf
//                       </button>
//                     </div>
//                   );
//                 })}
//           </div>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default UploadPDF;






// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./css/Uploadpdf.css";

// const UploadPDF = () => {
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState(null);
//   const [allImage, setAllImage] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getPdf();
//   }, []);

//   const getPdf = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/api/getfiles");
//       console.log(result.data.data);
//       setAllImage(result.data.data);
//     } catch (error) {
//       console.error("Error fetching PDFs:", error);
//       alert("Error fetching PDFs");
//     }
//   };


//   const submitImage = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("file", file);
//     console.log(title, file);
//     console.log("pdf is uploading");
//     try {
//       const result = await axios.post("http://localhost:5000/api/uploadfiles", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log("pdf is uploaded");
//       console.log(result);

//       if (result.data.status === "ok") {
//         alert("Uploaded Successfully!!!");
//         getPdf();
//       }
//     } catch (error) {
//       console.error("Error uploading PDF:", error);
//       alert("Error uploading PDF");
//     }
//   };

//   const navigateToPdfList = () => {
//     navigate("/lot", { state: { pdfs: allImage } });
//   };


//   return (
//     <>
//       <div className="uploadpdf">
//         <form className="pdfform" onSubmit={submitImage}>
//           <h4>Upload PDF</h4>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             className="form-control pt-2 mt-2"
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Title"
//             id="title"
//             required
//           />
//           <input
//             type="file"
//             className="form-control mt-4"
//             id="file"
//             accept="application/pdf"
//             required
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <button className="btn btn-dark mt-3" type="submit">
//             Submit
//           </button>
//           <button className="btn btn-dark mt-3 ml-2" target="_blank" type="button" onClick={navigateToPdfList}>
//             View PDFs
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };


// export default UploadPDF;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/Uploadpdf.css";

const UploadPDF = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [allImage, setAllImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/getfiles");
      console.log(result.data.data);
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
      alert("Error fetching PDFs");
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);
    console.log("pdf is uploading");
    try {
      const result = await axios.post("http://localhost:5000/api/uploadfiles", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("pdf is uploaded");
      console.log(result);

      if (result.data.status === "ok") {
        alert("Uploaded Successfully!!!");
        getPdf();
      }
    } catch (error) {
      console.error("Error uploading PDF:", error);
      alert("Error uploading PDF");
    }
  };

  const navigateToPdfList = () => {
    window.open("/lot", "_blank");
  };

  return (
    <>
      <div className="uploadpdf">
        <form className="pdfform" onSubmit={submitImage}>
          <h4>Upload PDF</h4>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control pt-2 mt-2"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            id="title"
            required
          />
          <input
            type="file"
            className="form-control mt-4"
            id="file"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className="btn btn-dark mt-3" type="submit">
            Submit
          </button>
          <button className="btn btn-dark mt-3" type="button" onClick={navigateToPdfList}>
            View PDFs
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadPDF;
