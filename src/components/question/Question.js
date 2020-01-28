import React,{Component} from 'react'
import QuestionListing from '../question/list/QuestionListing'
import axios from 'axios'
import QuestionAdding from '../question/add/QuestionAdding'
import ApiUtils from '../../utils/ApiUtils';

class Question extends Component{

    state = {
      questions: []
    }
  
    addQuestion = question => {
  
    }

    componentDidMount(){
        // console.log(ApiUtils.getQuestions());
        // axios.get(process.env.REACT_APP_SERVER_URL)
        // .then(res => axios.get(`${process.env.REACT_APP_SERVER_URL}${res.data.questions_url}`))
        // .then(res => this.setState({ questions : res.data}))
        // .catch(error => this.setState({ questions :null}))
        ApiUtils.getQuestions(data => this.setState({ questions : data}));
    }
  
    render(){
        
        console.log(this.state.questions);
      return (
        <dev style={{margin:  '0 auto'}}>
          {/* <QuestionAdding addQuestion={this.addQuestion}/> */}
          <QuestionListing questions={this.state.questions}/>
        </dev>
       );
    }
  }

  
  
  export default Question;