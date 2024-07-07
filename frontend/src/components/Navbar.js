    // // import { Link } from "react-router-dom";
    // import { useState } from "react";



    // const Navbar = () => {

    // const [logout, setlogout] = useState("");



    // const handleOnClickLogout = () => {
    // setlogout(window.location.href = "./");

    // }



    // const customPrimaryColor = '#020135';
    // const customSecondaryColor = '#ffffff';
    // const custom3rdColor = '#f4cd0b';



    // return (
    // <>
    // <div >

    // <nav className="navbar  border-bottom border-body navbar-expand-lg" style={{ backgroundColor: customPrimaryColor }}>
    // <div className="container-fluid" >
    //     {/* <Link to="/"> */}
    //     <a className="navbar-brand " href="#" style={{ color: customSecondaryColor }}>
    //         <img src="/dune.jpg" alt="" width="50" height="40" className="d-inline-block align-text-top " />
    //         <br></br>
    //         LECTURESCHECK
    //     </a>
    //     {/* <p className="navbar-brand fst-italic fs-3 ms-2">LecturesCheck</p> */}
    //     {/* </Link> */}

    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

    //         <ul className="navbar-nav">

    //             {/* <li className="nav-item pe-3 ">
    //                 <Link to='/video'>
    //                     <button className="btn btn-outline-success font-monospace">Upload Video</button>
    //                 </Link>

    //             </li>
    //             <li className="nav-item pe-3 ">
    //                 <Link to='/pdf'>
    //                     <button className="btn btn-outline-success font-monospace">Upload PDF</button>
    //                 </Link>
    //             </li> */}
    //             {/* <li className="nav-item pe-3">
    //                 <button className="btn btn- font-monospace" style={{ backgroundColor: custom3rdColor }} onClick={handleOnClickLogout}>LogOut</button>
    //             </li> */}
                
    //             {/* <li className="nav-item pe-3">
    //                 <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">

    //                     <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill={customSecondaryColor} className="bi bi-person-fill" viewBox="0 0 16 16">
    //                         <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    //                     </svg>
    //                 </button>
    //             </li> */}

    //         </ul>

    //     </div>
    // </div>
    // </nav>

    // </div>
    // </>
    // );
    // }

    // export default Navbar;














    // import { Link } from "react-router-dom";
    // import { useState } from "react";
    // import "./css/Navbar.css";
    
    // const Navbar = () => {
    
    //     const [logout, setlogout] = useState("");
        
        
    
    //     const handleOnClickLogout = () => {
    //         setlogout(window.location.href = "./");
    
    //     };
        
    
        
    //     const customPrimaryColor = '#27012d';
    //     const customSecondaryColor = '#ffffff';
    //     const custom3rdColor = '#f4cd0b';
    
    
    
    //     return (
    //         <>
           
            
            
    //             <nav className="navbar sticky-top border-bottom border-body navbar-expand-lg custom-navbar" style={{ backgroundColor: customPrimaryColor}}>
    //                 <div className="container-fluid">
    //                     {/* <Link to="/"> */}
    //                     <a className="navbar-brand " href="/Home" style={{ color: customSecondaryColor }}>
    //                         <img src="/dune.jpg" alt="" width="50" height="40" className="d-inline-block align-text-top " />
    //                         <br></br>
    //                         Dune state University
    //                     </a>
    //                     {/* <p className="navbar-brand fst-italic fs-3 ms-2">LecturesCheck</p> */}
    //                     {/* </Link> */}
    
    //                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                         <span className="navbar-toggler-icon"></span>
    //                     </button>
    //                     <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    
    //                         <ul className="navbar-nav">
    
                                
    
    //                             {/* <li className="nav-item pe-3 ">
    //                                 <Link to='/video'>
    //                                     <button className="btn btn-outline-success font-monospace">Upload Video</button>
    //                                 </Link>
    
    //                             </li>
    //                             <li className="nav-item pe-3 ">
    //                                 <Link to='/pdf'>
    //                                     <button className="btn btn-outline-success font-monospace">Upload PDF</button>
    //                                 </Link>
    //                             </li> */}
                                
    //                             <li className="nav-item pe-3">
    //                                 <button className="btn font-monospace" style={{ backgroundColor: custom3rdColor, color: customPrimaryColor }} onClick={handleOnClickLogout}>LogOut</button>
                                    
    //                             </li>
    //                             <li className="nav-item pe-3">
    //                                 <button className="btn" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                        
    //                                     <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill={customSecondaryColor} className="bi bi-person-fill" viewBox="0 0 16 16">
    //                                         <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    //                                     </svg>
    //                                 </button>
    //                             </li>
                                
    //                         </ul>
    
    //                     </div>
    //                 </div>
    //             </nav>
    //         </>
    //     );
    // }
    
    // export default Navbar;





    import { useState } from "react";
    import "./css/Navbar.css";
    
    const Navbar = () => {
        const [logout, setLogout] = useState("");
    
        const handleOnClickLogout = () => {
            setLogout(window.location.href = "./");
        };
    
        const handleOnClickDarkMode = () => {
            // Implement your dark mode toggle logic here
            // You can use localStorage or state to toggle between light and dark mode
            // Example: Toggle a CSS class on the body element
            document.body.classList.toggle("dark-mode");
        };
    
        const customPrimaryColor = '#27012d';
        const customSecondaryColor = '#ffffff';
        const custom3rdColor = '#f4cd0b';
    
        return (
            <>
                <nav className="navbar sticky-top border-bottom border-body navbar-expand-lg custom-navbar" style={{ backgroundColor: customPrimaryColor }}>
                    <div className="container-fluid">
                        <a className="navbar-brand " href="/Home" style={{ color: customSecondaryColor }}>
                            <img src="/dune.jpg" alt="" width="50" height="40" className="d-inline-block align-text-top " />
                            <br></br>
                            Dune state University
                        </a>
    
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    
                            <ul className="navbar-nav">
                                <li className="nav-item pe-3">
                                    <button className="btn font-monospace" style={{ backgroundColor: custom3rdColor, color: customPrimaryColor }} onClick={handleOnClickLogout}>LogOut</button>
                                </li>
                                <li className="nav-item pe-3">
                                    <button className="btn font-monospace" style={{ backgroundColor: customPrimaryColor, color: customSecondaryColor }} onClick={handleOnClickDarkMode}>Dark Mode</button>
                                </li>
                                <li className="nav-item pe-3">
                                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill={customSecondaryColor} className="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
    
                        </div>
                    </div>
                </nav>
            </>
        );
    }
    
    export default Navbar;
    