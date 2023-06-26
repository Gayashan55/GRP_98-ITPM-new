import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintHistory from './Components/Dashboard/LodgedComplaintHistory';
import LodgedComplaint from './Components/Dashboard/LodgedComplaint';
import Volunteers from './Components/Volunteers/Volunteers';
import Report from './Components/Home/ComplaintChart';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ViewComplaint from './Components/Dashboard/ViewLodgedComplaint';
import EditComplaint from './Components/Dashboard/EditLodgedComplaint';
import Footer from './Components/Footer/Footer';

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
  );
}

export default App;