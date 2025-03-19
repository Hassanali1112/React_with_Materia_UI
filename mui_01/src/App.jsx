import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home";

import PrimarySearchAppBar from "./AppBar/AppBar";
import Tour from "./Tour/Tour";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Tour />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
