import React, { useState, useEffect,useCallback } from 'react';
import StyledDropzone from './drop'
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currImage, setCurrentImage] = useState('false');

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to the automatic multiple choice checker</h1>
      </header>
      <div className="App-body">
        <p>The current time is {currentTime}.</p>
        <p>The current image status is {currImage}.</p>
        <StyledDropzone />

        <p>please enter the number of questions in the test:</p>
        <p>for each question, enter the solution number</p>
    </div>
      <footer className="App-footer">
        By Roy and Batel
      </footer>
    </div>
  );
}

export default App;

