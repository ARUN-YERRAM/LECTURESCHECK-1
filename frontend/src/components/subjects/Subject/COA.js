import React from "react";
import { useState } from "react";
import Navbar from "../../Navbar";
import "../../css/subjects.css";
import Unit1 from "../../Units/Unit1";
import Unit2 from "../../Units/Unit2";
import Unit3 from "../../Units/Unit3";
import Unit4 from "../../Units/Unit4";
import Unit5 from "../../Units/Unit5";
const COA = () => {
   const [currentPage,setCurrentPage] = useState(0);

   const renderContent = ()=>
    {
        switch(currentPage)
        {
            case 0:
                return <Unit1/>;
            
            case 1:
                return <Unit2/>;
            case 2:
                return <Unit3/>;
            case 3:
                return <Unit4/>;
            case 4:
                return <Unit5/>;
            default:
                return <Unit1/>;
        }
    };
    // const customPrimaryColor = '#cf19e7';


    // const handelNext = () =>{
    //     setCurrentPage((prevPage)=>(prevPage + 1)%5);
    // };

    return ( 
        <>
        <Navbar/>
        {/* <Sidebar/> */}
            <h2 className="heading d-flex justify-content-start ps-4 pt-5 pb-2">Computer Organization and Architecture</h2>
            <div className="container sub-serv">
                <div className="row sub-row">
                    <div className="col sub-column">
                        <div className="card sub-cards d-flex justify-content-start">
                            <h4 className="units" style={{ fontWeight: "bold" }}>UNITS</h4>
                                
                            <li className="list pb-2 ">
                               <button className="btn  sub-btn" onClick={() => setCurrentPage(0)}  >Unit 1</button>
                                
                            </li>
                            <li className="list pb-2 ">
                                <button className="btn sub-btn" onClick={() => setCurrentPage(1)} >Unit 2</button>
                            </li>
                        
                        
                            <li className="list pb-2 ">
                                <button className="btn sub-btn" onClick={() => setCurrentPage(2)} >Unit 3</button>
                            </li>
                        
                        
                            <li className="list pb-2 ">
                                <button className="btn sub-btn" onClick={() => setCurrentPage(3)} >Unit 4</button>
                            </li>
                        
                        
                            <li className="list pb-2 ">
                                <button className="btn sub-btn" onClick={() => setCurrentPage(4)}>Unit 5</button>
                            </li>
                        </div>
                    </div>
                    <div className="col sub--column">
                        <div className="card sub--cards">
                            <div className="card-body sub-card-body">
                               {renderContent()}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
       
       
        </>
     );
}
 
export default COA;




