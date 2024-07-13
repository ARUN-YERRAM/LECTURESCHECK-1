import './App.css';
import {Routes, Route} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import UploadPDF from './components/UploadPDF';
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
