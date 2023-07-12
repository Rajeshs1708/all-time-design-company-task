import TaskForm from "./components/TaskForm";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="left_bar"></div>
        <div className="right_bar">
          <div className="right_bar_top">
            <div className="empty_box"></div>
            <div className="content_box">
              <h1>Test</h1>
              <p>Sloovi.com</p>
              <i>Add description,</i>
            </div>
          </div>
          <div className="right_bar_bottom">
            <Routes>
              <Route path="/" element={<TaskForm />} exact={true} />
              <Route path="/editTask" element={<TaskForm />} exact={true} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
