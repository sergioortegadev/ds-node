import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegExp from "./Components/RegExp";
import Home from "./Components/Home";
import Calc from "./Components/Calc";
import Ciclos from "./Components/Ciclos";
import Array from "./Components/Array";
import Functions from "./Components/Functions";
import PracticoHomeBanking from "./Components/PracticoHomeBanking";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regexp" element={<RegExp />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/ciclos" element={<Ciclos />} />
          <Route path="/array" element={<Array />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/homebanking" element={<PracticoHomeBanking />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
