import NavBar from "./NavBar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About"

import {Route, Routes} from "react-router-dom";
import SignIn from "./pages/SignIn";
function App() {

  return (
    <>
    <NavBar />
    <div className="contain">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
