import React,{Component} from 'react';
import Questions from '../questions/Questions'
import QuestionAdding from '../questions/Questions/QuestionAdding'
import './App.css';

class App extends Component{

  state = {
    questions: []
  }

  addQuestion = question => {

  }

  render(){
    return (
      <React.Fragment>
        <QuestionAdding addQuestion={this.addQuestion}/>
        <Questions questions={this.state.questions}/>
      </React.Fragment>
     );
  }
}

export default App;
