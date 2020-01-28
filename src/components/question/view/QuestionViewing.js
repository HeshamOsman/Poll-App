import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Questionviewing extends Component {
   
  render() {
    const { question, published_at : publishedAt, choices } = this.props.question;
    return (
      <Card variant="outlined" style={{width: 400, height: 200}}>
        <CardContent>
          <Typography variant="h5" component="h2" style={{backgroundColor:'#42dee1'}}>
              {question}
          </Typography>
          <Typography
            color="textSecondary"
            style={{backgroundColor:'#6decb9'}}
            gutterBottom
          >
            {publishedAt}
            <br/>
            {choices.length}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Questionviewing;
