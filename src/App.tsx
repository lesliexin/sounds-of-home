import React from 'react';
import ReactGA from 'react-ga';
import Home from './components/Home';

function initializeReactGA() {
  ReactGA.initialize('G-8CRH8MM291');
  ReactGA.pageview('/homepage');
}

function App() {

  return (
    <Home/>
  );
}

export default App;
