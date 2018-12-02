import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password:'',
    }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  signup = () =>{ 
    const { username, password } =this.state;
    axios.post('/signup', {username, password})
    .then(({config}) => {
      if (JSON.parse(config.data).username === 'admin'){
        window.location.href = '/admin'
      }else {
        window.location.href = '/main';
      }
    })
    .catch(err => {
      console.log(err)
    })
  } 

 
  render() {
    return (
      <div className="signup">
      <button onClick={() => window.location.href='/login'}>login</button>

      User Name :
      <input
      name='username'
      onChange={e => this.onChange(e)}
      />
      Password :
      <input
      name='password'
      onChange={e => this.onChange(e)}
      />
      <button onClick={() => this.signup()}>signup</button>
    </div>
    );
  }
}

export default Signup;
