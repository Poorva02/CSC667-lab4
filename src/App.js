import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';
import axios from 'axios';

const App = () => {
  //1 is state value
  //2 is setter
  const[stateHello, setStateHello] = React.useState('');
  const[isToggled, setisToggled] = React.useState(false);
  const [networkData, setNetworkData] = React.useState(null);
  const hello = 'Hello World!';

  React.useEffect(() => {
    axios.get('/api')
    .then((res) => {
      console.log(res.data);
      setNetworkData(res.data);
    })
    .catch(console.log);
  },[]);

  let appClassNAme = "App";
  if(isToggled){
    appClassNAme = "App Dark";
  }
  return (
    <div className="App">
      <header className="App-header">
        {networkData && (
          <div>
            {networkData.title} {networkData.data}
          </div>
        )}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {stateHello}
        </p>
        <button onClick={() => setisToggled(!isToggled)}>
          {isToggled ? 'Toggle On' : 'Toggle Off'}
        </button>
        {isToggled && (
          <div>
            Toggle is on
          </div>
        )}
        <input 
        value = {stateHello} 
        onChange={(e) => setStateHello(e.target.value)}
        />
        <Child title={stateHello} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
