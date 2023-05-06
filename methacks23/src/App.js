import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

// THIS IS JUST DATA FOR THE COHERE API
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer m24CBlVWn5iiojSf5Ap9DmcoJmxFMSFj0Dd1xjg5'
  },
  body: JSON.stringify({
    inputs: [
      'this game sucks, you suck',
      'stop being a dumbass',
      'Let\'s do this once and for all',
      'This is coming along nicely'
    ],
    examples: [
      {text: 'you are hot trash', label: 'Toxic'},
      {text: 'go to hell', label: 'Toxic'},
      {text: 'get rekt moron', label: 'Toxic'},
      {text: 'get a brain and use it', label: 'Toxic'},
      {text: 'say what you mean, you jerk.', label: 'Toxic'},
      {text: 'Are you really this stupid', label: 'Toxic'},
      {text: 'I will honestly kill you', label: 'Toxic'},
      {text: 'yo how are you', label: 'Benign'},
      {text: 'I\'m curious, how did that happen', label: 'Benign'},
      {text: 'Try that again', label: 'Benign'},
      {text: 'Hello everyone, excited to be here', label: 'Benign'},
      {text: 'I think I saw it first', label: 'Benign'},
      {text: 'That is an interesting point', label: 'Benign'},
      {text: 'I love this', label: 'Benign'},
      {text: 'We should try that sometime', label: 'Benign'},
      {text: 'You should go for it', label: 'Benign'}
    ],
    truncate: 'END',
    model: 'large'
  })
};

let text_filter = false;
let text_filter_neutralize = false; // USES GENERATE
let text_filter_block = false;
//let image_filter = false; UNCOMMENT WHEN USED

if (text_filter == true) {
  text_filter_neutralize = true;
  if (text_filter_block == true) {
    text_filter_neutralize = false;
  }
}

function App() {

  useEffect(() => {

    async function runCohereApi() {
      
      // I STOLE THIS FROM THE COHERE API. USING THE FETCH VERSION OF THEIR EXAMPLE CODE
      const data = await fetch('https://api.cohere.ai/v1/classify', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

      console.log(data);
    }

    runCohereApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
