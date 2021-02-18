import React, { Component } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { Grid, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  Icon: {
    marginLeft: "auto"
  },
  Paper: {
    margin: "auto",
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    width: 500
  },
  numbering: {
    fontWeight: "bold",
    marginRight: 10
  },
  answer: {
    color: "black",
  }
};

class SolutionItem extends Component {
  state = {
    fade: false
  };

  gridRef = React.createRef();

  deleteAnswer = () => {
    const fade = true;
    this.setState({ fade });

    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true);
      }, 500);
    });

    promise.then(() => this.props.deleteAnswer(this.props.index));
    console.log(this.state);
  };

  render() {
    const gridClass = this.state.fade ? "fade-out" : "";

    return (
      <Grid
        xs={12}
        className={`${gridClass}`}
        item
        key={this.props.index}
        ref={this.gridRef}
      >
        <Paper elevation={2} style={styles.Paper}>
          <span style={styles.numbering}>{this.props.index})</span>
          <span style={styles.answer}> {this.props.answer}</span>
          <IconButton
            color="primary"
            aria-label="Edit"
            style={styles.Icon}
            onClick={() => this.props.updateAnswer(this.props.index)}
          >
            <Edit fontSize="small" />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="Delete"
            onClick={this.deleteAnswer}
          >
            <Delete fontSize="small" />
          </IconButton>
        </Paper>
      </Grid>
    );
  }
}

export default SolutionItem;
