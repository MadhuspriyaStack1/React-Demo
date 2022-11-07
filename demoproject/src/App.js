import "./App.css";
import Form from "./components/Form";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="">Home  </Link>
        <Link to="/About">About  </Link>
        <Link to="/Contact">Contact  </Link>

     <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/About' element={<About/>}></Route>
        <Route exact path='/Contact' element={<Contact/>}></Route>
     </Routes>
      </Router>
    </div>
  );
}

export default App;
