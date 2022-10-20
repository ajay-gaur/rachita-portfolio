import Navbar from "./Components/nav";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home"
import './Pages/responsive.css'


function App() {
  return (
    <div className="App">
      <header><Navbar/></header>
        <Home/>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
