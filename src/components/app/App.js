import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Question from "../question/Question";
import "./App.css";
import QuestionViewingDetails from "../question/view-details/QuestionViewingDetails";

class App extends Component {
  state = {
    clickedQuestion: {}
  };
  setQuestion = (clickedQuestion,history) => {
    console.log("new quession>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    this.setState({ clickedQuestion });
    history.push(clickedQuestion.url);
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={props => {
           return <Question {...props} setQuestion={this.setQuestion} />}} />
            <Route
              path={this.state.clickedQuestion.url}
              render={props => (
                <QuestionViewingDetails
                  {...props}
                  question={this.state.clickedQuestion}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
