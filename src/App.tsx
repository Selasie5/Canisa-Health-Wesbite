
import { BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import HCP from "./pages/HCP";
import Contact from "./pages/Contact";
import OurStory from "./pages/OurStory";
import Footer from "./components/Footer";
const App = () => {
  return (
<Router>
  <Navbar/>
  <div className=" mx-auto ">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/health-care-professionals" element={<HCP/>}/>
      <Route path="/our-story" element={<OurStory/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
    </Routes>
  </div>
  <Footer/>
</Router>
  )
}

export default App