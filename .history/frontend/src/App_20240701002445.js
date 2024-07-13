
// import './App.css';
// // import {Routes, Route} from "react-router-dom";
// // import LoginForm from './components/LoginForm';
// import Home from './components/Home';
// import {Route, Routes } from 'react-router-dom';
// import About from './components/About';
// import FileUpload from './components/FileUpload';
// // import VideoUpload from './components/Video'; 
// // import Unit1 from './components/OS/Unit1';
// // import Unit2 from './components/OS/Unit2';
// // import Unit3 from './components/OS/Unit3';
// // import DUnit1 from './components/DBMS/Unit1';
// // import DUnit2 from './components/DBMS/Unit2';
// // import DUnit3 from './components/DBMS/Unit3';
// // import Lot from './components/Lot.js';
// // import VideoList from './components/VideosList.js'; 
// // import VideoUploader from './components/VideoUploader';
// function App() {
//   return (
//     <div className="App">
      

//       <Routes>
//         {/* <Route path='/' element={<LoginForm/>}/> */}
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element = {<About/>}/>
//         <Route path='/fileUpload' element={<FileUpload/>}/>
//         {/* <Route path='/videoUpload'  element={<VideoUpload/>}/> */}
//         {/* <Route path='/OUnit1' element={<Unit1/>}/> */}
//         {/* <Route path='/OUnit2' element={<Unit2/>}/> */}
//         {/* <Route path='/OUnit3' element={<Unit3/>}/> */}
//         {/* <Route path='/DUnit1' element={<DUnit1/>}/> */}
//         {/* <Route path='/DUnit2' element={<DUnit2/>}/> */}
//         {/* <Route path='/DUnit3' element={<DUnit3/>}/> */}
//         {/* <Route path='/Lot' element={<Lot/>}/> */}
//         {/* <Route path="/videolist" element={<VideoList />} /> Add this route */}
//         {/* <Route path='/VideoUploader' element={<VideoUploader/>}/> */}
        
//       </Routes>
//     </div>

    
//   );
// }

// export default App;








import './App.css';
import {Routes, Route} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import UploadPDF from './components/UploadPDF';
// import Unit1 from './components/Units/Unit1';
import UploadVideo from './components/UploadVideo';
import FirstSem from './components/subjects/FirstSem';
import SecondSem from './components/subjects/SecondSem';
import COA from './components/subjects/Subject/COA';
import Unit1 from './components/Units/Unit1';
import Unit2 from './components/Units/Unit2';
import Unit3 from './components/Units/Unit3';
import Unit4 from './components/Units/Unit4';
import Unit5 from './components/Units/Unit5';
import ADE from './components/subjects/Subject/ADE';
import IML from './components/subjects/Subject/IML';










function App() {
  return (
    <div className="App">
     
      

      <Routes>

        
        <Route path='/uploadpdf' element={<UploadPDF/>}/>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/home' element={<Home/>}/>

        <Route path='/uploadvideo' element={<UploadVideo/>}/>
        <Route path='/firstsem' element={<FirstSem/>}/>
        <Route path="/secondsem" element={<SecondSem/>}/>
        <Route path='/coa' element={<COA/>}/>
        <Route path='/ade' element={<ADE/>}/>
        <Route path='/iml' element={<IML/>}/>
        <Route path='/unit1' element={<Unit1/>}/>
        <Route path='/unit2' element={<Unit2/>}/>
        <Route path='/unit3' element={<Unit3/>}/>
        <Route path='/unit4' element={<Unit4/>}/>
        <Route path='/unit5' element={<Unit5/>}/>

      </Routes>
    </div>

     
    
  );
}

export default App;
