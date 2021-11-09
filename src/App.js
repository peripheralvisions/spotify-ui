import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar.jsx';
import Player from './components/Player/Player.jsx';
import Main from './components/Main/Main.jsx';

function App() {
    return (
        <div className="App flex flex-col h-screen font-main">
            <div className="top flex-1 flex overflow-y-hidden">
                <Sidebar/>
                <Main/>
            </div>
            <div className="bottom">
                <Player/>
            </div>
        </div>
    );
}

export default App;
