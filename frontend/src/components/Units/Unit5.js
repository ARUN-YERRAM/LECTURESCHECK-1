import React from "react";
import { useState } from "react";
import UploadVideo from "../UploadVideo";
import UploadPDF from "../UploadPDF";


const Unit5 = () => {
    
    const [isVideoUploaded, setIsVideoUploaded] = useState(false);

    const handelVideoSubmit = () => {
        setIsVideoUploaded(true);
    };

    return (
        <>
            <h4>unit 5</h4>
            <div>
                {isVideoUploaded ? <UploadPDF/> : <UploadVideo onSubmit={handelVideoSubmit}/>}
            </div>




        </>
    );
    
}

export default Unit5;