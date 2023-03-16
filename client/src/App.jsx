import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Detail from "./components/Detail";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
