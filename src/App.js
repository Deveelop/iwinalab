import NavBar from "./NavBar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import {Route, Routes} from "react-router-dom";
function App() {

  return (
    <>
    <NavBar />
    <div className="contain">
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
