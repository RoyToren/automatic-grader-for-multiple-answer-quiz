import React from "react";
import SolutionItem from "./SolutionItem";
import EditCorretSolution from "./EditCorretSolution";
import { Grid } from "@material-ui/core";

class CorrectSolutionsList extends React.Component {
  renderAnswer = key => {
    if (this.props.list[key] == null) return null;
    if (this.props.list[key]["status"] === "active") {
      return (
        <SolutionItem
          key={key}
          index={key}
          answer={this.props.list[key]["answer"]}
          deleteAnswer={this.props.deleteAnswer}
          updateAnswer={this.props.updateAnswer}
        />
      );
    } else if (this.props.list[key]["status"] === "editing") {
      return (
        <EditCorretSolution
          key={key}
          index={key}
          answer={this.props.list[key]["answer"]}
          saveAnswer={this.props.saveAnswer}
        />
      );
    }
  };
  render() {
    return (
      <Grid container>
        {Object.keys(this.props.list).map(key => this.renderAnswer(key))}
      </Grid>
    );
  }
}

export default CorrectSolutionsList;
