import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegExp from "./Components/RegExp";
import Home from "./Components/Home";
import Calc from "./Components/Calc";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regexp" element={<RegExp />} />
          <Route path="/calc" element={<Calc />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
