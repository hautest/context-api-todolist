import { Context } from "./contextAPI/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="context" element={<Context />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
