import React from "react";
import { useState } from "react";
import UploadPDF from "../UploadPDF";
import UploadVideo from "../UploadVideo";



const Unit4 = () => {
    const [isVideoUploaded, setIsVideoUploaded] = useState(false);

    const handelVideoSubmit = () => {
        setIsVideoUploaded(true);
    };

    return (
        <>
            <h4>unit 4</h4>
            <div>
                {isVideoUploaded ? <UploadPDF/> : <UploadVideo onSubmit={handelVideoSubmit}/>}
            </div>




        </>
    );
}



export default Unit4;