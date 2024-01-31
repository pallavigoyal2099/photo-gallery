import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
    <Navbar/>
    <div className="flex items-center justify-center" >
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
    </Routes>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
