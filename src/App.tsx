import React,{ Component} from 'react';
//import './css/App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './Component/NavBar';



export default class App extends Component {

  render(){

  let list_series = [
      {
        id: 1,
        text: 'Breaking Bad',
        years: 2014,
      },
      {
        id: 2,
        text: 'Los Sopranos',
        years: 1998,
      },
      {
        id: 3,
        text: 'The Wire',
        years: 1995,
      }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <NavBar list_series = {list_series}/>
      </header>
    </div>
  );
  } 
}


