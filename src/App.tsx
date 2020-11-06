import React from 'react';
import ReactGA from 'react-ga';
import Home from './components/Home';

function initializeReactGA() {
  ReactGA.initialize('UA-150454598-2');
  ReactGA.pageview('/homepage');
}

function App() {

  return (
    <Home/>
  );
}

export default App;
