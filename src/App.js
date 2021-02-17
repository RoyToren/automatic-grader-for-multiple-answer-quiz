import React, { useState, useEffect,useCallback } from 'react';
import StyledDropzone from './drop'
import Checkout from './Checkout'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currImage, setCurrentImage] = useState('false');
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
      <h1>Welcome to the automatic multiple choice checker</h1>
      </header>
      <div className="App-body">
        <p>The current time is {currentTime}.</p>
        <p>The current image status is {currImage}.</p>
        <StyledDropzone /> */}
        <Checkout/>
        {/* <form className={classes.root} noValidate autoComplete="off">
          <TextField required type="number" id="standard-basic" label="Number of questions in test" />
          <List component="nav" aria-label="secondary mailbox folders">
          <ListItem TextField>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </form>
        <p>please enter the number of questions in the test:</p> 
    </div>*/}
    </div>
  );
}

export default App;

