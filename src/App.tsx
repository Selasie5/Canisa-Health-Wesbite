
import { BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services";
import Contact from "./pages/Contact";
const App = () => {
  return (
<Router>
  <Navbar/>
  <div className="container mx-auto p-4">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
    </Routes>
  </div>
</Router>
  )
}

export default App