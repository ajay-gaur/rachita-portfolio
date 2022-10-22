import Navbar from "./Components/nav";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home"
import About from "./Pages/About"
import './Pages/responsive.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
      <Router>
        <div className="App">
          <header><Navbar/></header>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          <footer><Footer/></footer>
        </div>
      </Router>
  );
}

export default App;
