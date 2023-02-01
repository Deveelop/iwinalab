import NavBar from "./NavBar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About"
import Account from "./pages/Account";
import {Route, Routes} from "react-router-dom";
function App() {

  return (
    <>
    <NavBar />
    <div className="contain">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
