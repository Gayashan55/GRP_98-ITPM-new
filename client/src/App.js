<<<<<<< HEAD
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintHistory from './components/Dashboard/LodgedComplaintHistory';
import LodgedComplaint from './components/Dashboard/LodgedComplaint';
import Volunteers from './components/Volunteers/Volunteers';
import Report from './components/Home/ComplaintChart';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ViewComplaint from './components/Dashboard/ViewLodgedComplaint';
import EditComplaint from './components/Dashboard/EditLodgedComplaint';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path='/complaints' element={<LodgedComplaint/>} />
        <Route exact path='/view/:id' element={<ViewComplaint/>} />
        <Route exact path='/edit/:id' element={<EditComplaint/>} />
        <Route exact path="/history" element={<ComplaintHistory/>} />
        <Route exact path="/volunteers" element={<Volunteers/>} />
        <Route exact path="/reports" element={<Report/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />

      </Routes>
      </Router>
      <Footer/>
    </div>
=======
import 'antd/dist/reset.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CollectorsResponse from './Components/Collector/CollectorResponse';
import AddCollector from './Components/Collector/AddCollector';
import UpdateCollector from './Components/Collector/UpdateCollector';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/collector-response" element = {<CollectorsResponse/>}/>
        <Route path="/add-collector" element = {<AddCollector/>}/>
        <Route path="/update-collector/:id" element = {<UpdateCollector/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> 9382b1ff5a7f387dd21cd991b2bbada5ed642dd0
  );
}

export default App;