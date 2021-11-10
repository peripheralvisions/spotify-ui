import logo from "./logo.svg";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Player from "./components/Player/Player.jsx";
import Main from "./components/Main/Main.jsx";

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col h-screen font-main">
      <Router>
        <div className="top flex-1 flex overflow-y-hidden">
          <Sidebar />
          <Main />
        </div>

        <div className="bottom">
          <Player />
        </div>

      </Router>
    </div>
  );
}

export default App;
