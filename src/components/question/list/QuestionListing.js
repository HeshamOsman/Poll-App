import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import QuestionViewing from "../view/QuestionViewing";

class QuestionListing extends Component {
  validateQuestions = question => {
    if (!question.question || !question.question.trim()) return false;
    if (!question.url || !question.url.trim()) return false;
    if (!question.published_at) return false;

    if (question.choices) {
      question.choices = question.choices.filter(choice => {
        if (!choice.choice || !choice.choice.trim()) return false;
        if (!choice.url || !choice.url.trim()) return false;
        return true;
      });
    }
    return true;
  };

  render() {
    if (!this.props.questions) return <h1>No Data</h1>;
    return (
      <Grid
        container
        style={{ backgroundColor: "#3fc5f0", margin: "0 auto" }}
        spacing={2}
      >
        {this.props.questions.filter(this.validateQuestions).map(question => (
          <Grid key={question.url} item>
            <QuestionViewing question={question} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default QuestionListing;
