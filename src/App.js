import { Context } from "./contextAPI/Context";
import { Recoil } from "./recoil/Recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/context" element={<Context />} />
        <Route path="/recoil" element={<Recoil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
