import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
  state = {
    theQuestion:[]
  }

  // componentDidMount() {
  //   axios.post('/question',{})
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }

  handleChange = e => {
    const arr = [];
    arr.push({
      [e.target.name]: e.target.value
    })
    this.setState({ theQuestion: arr });
  }

  sendQuestion = () => {
    const { theQuestion } = this.state;

    axios.post('/question', { theQuestion })
    .then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="Main">
      Main
      <input 
        type="text" 
        name='structure'
        onChange={e => this.handleChange(e)}
       />
       <button onClick={() => this.sendQuestion()}>Question</button>
      </div>
    );
  }
}

export default Main;
