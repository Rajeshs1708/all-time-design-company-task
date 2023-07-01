import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app mt-5">
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
