import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import question from './qu'

class Questions extends Component {
  render() {
    return (
      <Grid container>
        {this.props.questions.map(question => (
          <Grid key={question.url} item>
            <Paper className={classes.paper} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
