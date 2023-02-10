import logo from './logo.svg';
import './App.css';
import { UseStates } from './components/UseStatesCompoent/UseStates';
import { AjaxComponent } from './components/AjaxComponent/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h6>APP Estados REACT</h6>
      </header>
      <div className="App-component">
        <UseStates/>
        <AjaxComponent />
      </div>
      <footer className="App-footer">
        <h6> App Estados react </h6>
      </footer>
    </div>
  );
}

export default App;
