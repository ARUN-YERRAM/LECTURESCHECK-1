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


