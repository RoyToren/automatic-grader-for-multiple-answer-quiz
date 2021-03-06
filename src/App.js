import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Divider from '@material-ui/core/Divider';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AddTestImages from './AddTestImages';
import AddTestSolutionForm from './AddTestSolutionForm';
import GraderResults from './GraderResults';
import _ from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import { green } from '@material-ui/core/colors';
import { List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    background: '#282c34',
    color: 'white',
    alignItems: 'center',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    background: '#282c34',
    color: 'white',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  progress: {
    marginTop: 'auto',
    color: 'green'
  },
  divider: {
    marginTop: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  listItem: {
    display: 'block',
    textAlign: 'center'
  }
}));

const steps = ['Tests images', 'Correct answers', 'Results'];

function App() {
  const [testImages, setTestImages] = React.useState(0);
  const [isSubmit, setIsSubmit] = React.useState(0);
  const [testSolutionInfo, setTestSolutionInfo] = React.useState({});
  const [checkerResults, setCheckerResults] = React.useState({});
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const AddTestImagesCallback = (testImages) => {
    setTestImages(testImages)
  }
  const SetTestSolutionInfoCallback = (testSolution) => {
    setTestSolutionInfo(testSolution)
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddTestImages parentCallback={AddTestImagesCallback} />;
      case 1:
        return <AddTestSolutionForm parentCallback={SetTestSolutionInfoCallback} />;
      case 2:
        return <GraderResults data={checkerResults}/>;
      default:
        throw new Error('Unknown step');
    }
  }
  const handleNext = () => {
    if (activeStep === steps.length - 2) {
      
      let formData = new FormData();
      if(testSolutionInfo.numberOfQuestions === null || testSolutionInfo.numberOfQuestions === 0)
      {
          alert("please enter the number of questions in the test");
          return;
      }
      if(testSolutionInfo.answersSolutionsList === null || testSolutionInfo.answersSolutionsList === {} || _.size(testSolutionInfo.answersSolutionsList) !== parseInt(testSolutionInfo.numberOfQuestions) )
      {
          alert("please enter answers for the number of questions in the test");
          return;
      }
      formData.append('questions_count', testSolutionInfo.numberOfQuestions);
      for (var key in testSolutionInfo.answersSolutionsList) {
        formData.append(key, testSolutionInfo.answersSolutionsList[key].answer);
      }
      formData.append('images', testImages, testImages.name)
      const options = {
        headers: {
          'Accept': 'application/json',
        },
        method: 'POST',
        body: formData,
      };
      setIsSubmit(1);

      fetch('/api/checkTest', options).then(res => res.json()).then(data => {
            const currID = setInterval(async () => {
            const res = await fetch(`/api/returnResults/`+ data['task_id'], {
             headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }});
            const new_data = await res.json();
              if(new_data['status'] == 'finished'){
                setCheckerResults(new_data['result']);
                setIsSubmit(0);
                clearInterval(currID);
                setActiveStep(activeStep + 1);
              }
              else if(new_data['status'] == 'not started')
              {
                clearInterval(currID);
                alert('internal error, please try again');
              }
            }, 3000);
      });
    }

    if (activeStep === steps.length - 3) {
    if(testImages === null || testImages === 0)
      {
          alert("please enter an image of a test to check");
          return;
      }
      setActiveStep(activeStep + 1);
    }
    if (activeStep === steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const restartApp = () => {
    setTestImages(0);
    setTestSolutionInfo({});
    setCheckerResults({});
    setActiveStep(0);
    setIsSubmit(0);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="App">
      <React.Fragment >
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Automatic multiple choice checker
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for using our service 👏🏻
                  </Typography>
                  <Button
                        variant="contained"
                        color="primary"
                        onClick={restartApp}
                        className={classes.button}
                      >
                        Again
                      </Button>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && activeStep !== 2 && (
                        <Button onClick={handleBack} className={classes.button} disabled={isSubmit}>
                          Back
                        </Button>
                      )}
                      { isSubmit ? <CircularProgress className={classes.progress}/> : <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                        disabled={isSubmit}
                      >{activeStep === steps.length - 2 ? 'Submit' : 'Next'}
                      </Button>}
                    </div>
                  </React.Fragment>
                )}
              { isSubmit ? <span>Please wait for the results 🔎</span> : null} 
            </React.Fragment>
            <Divider className={classes.divider}/>
            <h3>Our assumptions:</h3>
            <List >
              <ListItem className={classes.listItem}>
              <span>1) Horizontal lines separate each question</span>
              </ListItem>
              <ListItem className={classes.listItem}>
              <span>2) Answer formatting is numeral, not alphabetic</span>
              </ListItem>
              <ListItem className={classes.listItem}>
              <span>3) Answers are Circled with a reasonable size and do not hide the number</span>
              </ListItem>
            </List>
            <h3>Example:</h3>
            <img width="75%" src="./testExample.jpg" alt="example"></img>
          </Paper>
        </main>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="inherit" align="center">
              {'Copyright © Roy and Batel '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Container>
        </footer>
      </React.Fragment>
    </div>
  );
}

export default App;
