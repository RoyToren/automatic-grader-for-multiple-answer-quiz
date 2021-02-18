import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AddCorrectSolution from "./AddCorrectSolution";
import CorrectSolutionsList from "./CorrectSolutionsList";
import _ from 'lodash';

export default class AddTestSolutionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfQuestions: 0,
      answersSolutionsList: {},
    };

    this.handleNumberOfQuestionsChange = this.handleNumberOfQuestionsChange.bind(this);
  }
  

  handleNumberOfQuestionsChange(event) {
    this.setState({numberOfQuestions: event.target.value});
    this.props.parentCallback({
      numberOfQuestions: event.target.value,
      answersSolutionsList: this.state.answersSolutionsList
    });
  }

  addToList = (answer) => {
    let listSize = _.size(this.state.answersSolutionsList) + 1;
    let list = { ...this.state.answersSolutionsList };
    list[listSize] = {
      answer: answer,
      status: "active"
    };
    this.setState({ answersSolutionsList: list });
    this.props.parentCallback({
      numberOfQuestions: this.state.numberOfQuestions,
      answersSolutionsList: list
    });

  };
  deleteAnswer = (key) => {
    let list = { ...this.state.answersSolutionsList };
    list[key] = null;

    this.setState({ answersSolutionsList: list });
    this.props.parentCallback({
      numberOfQuestions: this.state.numberOfQuestions,
      answersSolutionsList: list
    });
  };
  updateAnswer = (key) => {
    let list = { ...this.state.answersSolutionsList };
    list[key]["status"] = "editing";

    this.setState({ answersSolutionsList: list });
        this.props.parentCallback({
      numberOfQuestions: this.state.numberOfQuestions,
      answersSolutionsList: list
    });
  };
  saveAnswer = (key, answer) => {
    let list = { ...this.state.answersSolutionsList };
    list[key] = {
      answer: answer,
      status: "active"
    };

    this.setState({ answersSolutionsList: list });
    this.props.parentCallback({
      numberOfQuestions: this.state.numberOfQuestions,
      answersSolutionsList: list
    });
  };


  render (){
    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Fill the correct solutions for the test
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
        <TextField required type="number" fullWidth id="standard-basic" label="Number of questions In test" value={this.state.numberOfQuestions} onChange={this.handleNumberOfQuestionsChange}/>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12}>
              <AddCorrectSolution addToList={this.addToList} />
          </Grid>
            <CorrectSolutionsList
              deleteAnswer={this.deleteAnswer}
              list={this.state.answersSolutionsList}
              updateAnswer={this.updateAnswer}
              saveAnswer={this.saveAnswer}
            />
        </Grid>
      </Grid> 
    </React.Fragment>
    );
  }
}