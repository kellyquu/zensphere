import Logo from './logo.svg';
import {Popup} from './Popup.js';
import './App.css';

function handleClick() {
  alert('Button clicked!');
}

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Logo"/>
        <h3>ZenSphere</h3>
      </header>
      <Popup/>
      <footer>
        <button className="submit" onClick={handleClick}>Submit</button>
      </footer>
    </div>
  );
}

export default App;
