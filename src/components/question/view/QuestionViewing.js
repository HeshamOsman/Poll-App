import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import QuestionViewingDetails from "../view-details/QuestionViewingDetails";
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom'
class Questionviewing extends Component {
  render() {
    const {
      question,
      published_at: publishedAt,
      choices,
      url
    } = this.props.question;
    return (
      <React.Fragment>
        {/* render={(props) => <QuestionViewingDetails {...props} question = {this.props.question} /> } */}

        <Card variant="outlined" style={{ width: 400, height: 200 }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              style={{ backgroundColor: "#42dee1" }}
            >
              {question}
            </Typography>
            <Typography
              color="textSecondary"
              style={{ backgroundColor: "#6decb9" }}
              gutterBottom
            >
              {publishedAt}
              <br />
              {choices.length}
            </Typography>
          </CardContent>
          <CardActions>
            {/* {withRouter(({history}) => (
            <button
              type="button"
              onClick={() => {
                // history.push("/new-location");
                this.props.setQuestion(this.props.question,history)
              }}
            >
              Click Me!
            </button>
            ))()} */}
            <button onClick={() => this.props.setQuestion(this.props.question,this.props.history)}>
              view
            </button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default Questionviewing;
