import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state={
      email: "",
      password_digest: "",
      registrationErrors: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    const{
      email,
      password_digest
    } = this.state;
    axios.post("http://localhost:3001/sessions", {
      user: {
        email: email,
        password: password_digest
      }
    },
    { withCredentials: true }
)
   .then(response => {
     console.log("res from login", response);
      if(response.data.logged_in){
     this.props.handleSuccessfulAuth(response.data);
   }
   })
   .catch(error => {

     console.log("login error", error);
   });
    event.preventDefault();
  }
  render() {
    return (<div>
      <form onSubmit={this.handleSubmit}>

      <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required /><br/>
      <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required /><br/>
      <button type="submit">Login</button>
      </form>
      </div>
    );
  }
}
