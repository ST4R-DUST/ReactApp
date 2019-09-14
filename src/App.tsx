import React,{Fragment} from 'react';
import logo from './logo.svg';
import './css/App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react';
import { MyComponent } from './Component/MyComponent';
import { Container } from 'semantic-ui-react';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Gud
        </a>
        
        <MyComponent nombre='SWIT'/>
      </header>
    </div>
);
}

export default App;
