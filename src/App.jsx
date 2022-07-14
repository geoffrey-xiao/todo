import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import './styles/reset.css';
import LeftMenu from './layout/LeftMenu';
import Todo from './pages/Todo/index';
function App() {
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="App">
      {
        showMenu ?
          <LeftMenu /> : null
      }
      <div className="main-container">
        <div className="toggle-btn">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? 'Close' : 'Open'}
          </button>
        </div>
        <Todo />
      </div>
    </div>
  );
}

export default App;
