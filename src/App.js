import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import About from "./pages/About"
import AboutGPT from "./pages/AboutGPT"
import './styles/responsive.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
      <Router>
        <div className="App">
          <header><Navbar/></header>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/aboutgpt" element={<AboutGPT/>} />
            </Routes>
          <footer><Footer/></footer>
        </div>
      </Router>
  );
}

export default App;
