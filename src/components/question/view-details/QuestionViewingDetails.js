import React, { Component } from "react";

class QuestionViewingDetails extends Component {
  componentDidMount() {
    console.log("Mount>>>>>>>>>>>>>>>");
  }
  render() {
    console.log("Render>>>>>>>>>>>>>>>",this.props.question);
    return <h1>ANYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</h1>;
  }
}

export default QuestionViewingDetails;
