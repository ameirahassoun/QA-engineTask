import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
  constructor(props){
      super(props);
      this.state = {
        answer: '',
        allAnswers: []
      }
  }
  
  sendAnswer = (questions_id) => {
    const { answer } = this.state;
    axios.post('/addAnswer', {answer, questions_id})
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  };
  
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };
  
  componentDidMount = () => {
    axios.get('/allQuestion')
    .then(({data}) => {
      this.setState({
        allAnswers: data,
      })
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  };
  
  render() {
    const { allAnswers } = this.state;
    return (
      <div className="Admin">
      Admin
      <div>

      {allAnswers.map(user => {
        return(
          <div>
          {user.username}
          <div>
          {user.questions.map(ques => {
            
           return( ques.structure ?
             (<div>
              {ques.structure}
              <input
              name='answer'
              onChange={e => {this.onChange(e)}}
              />
              <button onClick={() => this.sendAnswer(ques._id)}>yes</button>
            </div>) : null)
          })
          }
          </div>
        </div>)
      })}
      </div>
      </div>
    );
  }
}

export default Admin;
