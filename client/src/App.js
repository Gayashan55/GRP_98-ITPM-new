import './App.css';
import './components/AddBin'
import AddBin from './components/AddBin'
import Dashboard from './components/Dashboard'
import ViewBin from './components/ViewBin';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route>

          <Route exact path="/addbin" element = {<AddBin/>}/>
          <Route exact path="/" element = {<Dashboard/>}/>
          <Route exact path="/all" element = {<ViewBin/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
