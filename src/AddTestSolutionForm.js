import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AddCorrectSolution from "./AddCorrectSolution";
import CorrectSolutionsList from "./CorrectSolutionsList";
import _ from 'lodash';

export default class AddTestSolutionForm extends Component {

  state = {
    list: {},
  };

  addToList = (todo) => {
    let listSize = _.size(this.state.list) + 1;
    let list = { ...this.state.list };
    list[listSize] = {
      todo: todo,
      status: "active"
    };
    this.setState({ list: list });
  };
  deleteTodo = (key) => {
    let list = { ...this.state.list };
    list[key] = null;

    this.setState({ list });
  };
  updateTodo = (key) => {
    let list = { ...this.state.list };
    list[key]["status"] = "editing";

    this.setState({ list });
  };
  saveTodo = (key, todo) => {
    let list = { ...this.state.list };
    list[key] = {
      todo: todo,
      status: "active"
    };

    this.setState({ list });
  };
  render (){
    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Fill the correct solutions for the test
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
        <TextField required type="number" fullWidth id="standard-basic" label="Number of questions In test" />
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12}>
              <AddCorrectSolution addToList={this.addToList} />
          </Grid>
            <CorrectSolutionsList
              deleteTodo={this.deleteTodo}
              list={this.state.list}
              updateTodo={this.updateTodo}
              saveTodo={this.saveTodo}
            />
        </Grid>
      </Grid> 
    </React.Fragment>
    );
  }
}