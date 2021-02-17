import React from "react";
import SolutionItem from "./SolutionItem";
import EditCorretSolution from "./EditCorretSolution";
import { Grid } from "@material-ui/core";

class CorrectSolutionsList extends React.Component {
  renderTodo = key => {
    if (this.props.list[key] == null) return null;
    if (this.props.list[key]["status"] === "active") {
      return (
        <SolutionItem
          key={key}
          index={key}
          todo={this.props.list[key]["todo"]}
          deleteTodo={this.props.deleteTodo}
          updateTodo={this.props.updateTodo}
        />
      );
    } else if (this.props.list[key]["status"] === "editing") {
      return (
        <EditCorretSolution
          key={key}
          index={key}
          todo={this.props.list[key]["todo"]}
          saveTodo={this.props.saveTodo}
        />
      );
    }
  };
  render() {
    return (
      <Grid container>
        {Object.keys(this.props.list).map(key => this.renderTodo(key))}
      </Grid>
    );
  }
}

export default CorrectSolutionsList;
