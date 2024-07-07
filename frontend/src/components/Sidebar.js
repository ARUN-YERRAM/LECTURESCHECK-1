// // Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// // import FileUpload from './FileUpload';
// import "./Sidebar.css";


// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>


//                 <li>
//                     <Link to="/about">
//                         <button className = "btn btn-dark font-monospace">About us</button>
//                     </Link>
//                 </li>


//                 {/* <li><a href="#news">News</a></li> */}
//                 {/* <li class="dropdown">
//                     <Link class="dropbtn">Video</Link>
//                     <div class="dropdown-content">
//                         <Link to="/OUnit1">UNIT 1</Link>
//                         <Link to="/OUnit2">UNIT 2</Link>
//                         <Link to="/OUnit3">UNIT 3</Link>
//                     </div>
                    
//                 </li>
//                 <br/>

//                 <li class="dropdown">
//                     <Link class="dropbtn">DBMS</Link>
//                     <div class="dropdown-content">
//                         <Link to="/DUnit1">UNIT 1</Link>
//                         <Link to="/DUnit2">UNIT 2</Link>
//                         <Link to="/DUnit3">UNIT 3</Link>
//                     </div>
                    
//                 </li> */}

//                 {/* <li>
//                     <Link to="/videoUpload">
//                         <button className = "btn btn-dark font-monospace">Video</button>
//                     </Link>
//                 </li> */}

//                 <li>
//                     <Link to="/fileUpload">
//                         <button className = "btn btn-dark font-monospace">Upload</button>
//                     </Link>
//                 </li>





//                 {/* <li>
//                     <Link to="/VideoUploader">
//                         <button className = "btn btn-dark font-monospace">Video Summarizer</button>
//                     </Link>
//                 </li> */}


//                 {/* <li className="nav-item pe-3 ">
//                      <Link to='/videoUpload'>
//                         <button className="btn btn-dark font-monospace">Upload Video</button>
//                     </Link>
//                 </li>

//                 <li className="nav-item pe-3 ">
//                     <Link to='/fileUpload'>
//                         <button className="btn btn-dark font-monospace">Upload PDF</button>
//                     </Link>
//                 </li> */}
//             </ul>
//         </div>
//     );
// }

// export default Sidebar;

































// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Sidebar.css";


const Sidebar = () => {
    return (
        <div className="sidebar fixed border-end ">
            <ul>
                <li>
                    <a href="/Home" className='dropbtn'>Home</a>
                </li>
                {/* <li><a href="#news">News</a></li> */}
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">1st Year</a>
                    <div className="dropdown-content">
                        <a href="#">NO subject found</a>
                        
                    </div>
                </li>
                <li className='dropdown'>
                    <a href='javascript:void(0)' className="dropbtn">2nd Year</a>
                    <div className="dropdown-content">
                        <a href="/FirstSem">sem 1</a>
                        <a href="/SecondSem">sem 2</a>
                    </div>

                </li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">3rd Year</a>
                    <div className="dropdown-content">
                        <a href="#">NO subject found</a>

                    </div>
                </li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">4th Year</a>
                    <div className="dropdown-content">
                        <a href="#">NO subject found</a>

                    </div>
                </li>

                {/* <br> */}
                {/* </br> */}
                {/* <li className="nav-item  ">
                    <Link to='/UploadVideo'>
                        <button className="btn font-monospace" >Upload Video</button>
                    </Link> 
                </li>
                <li className="nav-item pe-3 ">
                    <Link to='/UploadPDF'>
                        <button className="btn font-monospace">Upload PDF</button>
                    </Link>
                </li> */}
            </ul>
        </div>
    );
}

export default Sidebar;


