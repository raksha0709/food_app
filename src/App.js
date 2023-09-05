import About from "./Components/AboutUs";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
function App(){
  return(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
