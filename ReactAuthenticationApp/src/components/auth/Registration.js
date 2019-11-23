import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component{
  constructor(props) {
    super(props);
    this.state={
      firstname: "",
      lastname: "",
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
      firstname,
      lastname,
      email,
      password_digest
    } = this.state;
    axios.post("http://localhost:3001/registrations", {
      user: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password_digest: password_digest
      }
    },
    { withCredentials: true }
)
   .then(response => {
      if(response.data.status === 'created'){
        console.log(response.data);
     this.props.handleSuccessfulAuth(response.data);
   }
   })
   .catch(error => {

     console.log("registration error", error);
   });
    event.preventDefault();
  }
  render() {
    return (<div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="firstname" placeholder="Firstname" value={this.state.firstname} onChange={this.handleChange} required /><br/>
      <input type="text" name="lastname" placeholder="Lastname" value={this.state.lastname} onChange={this.handleChange} required /><br/>
      <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required /><br/>
      <input type="password" name="password_digest" placeholder="Password" value={this.state.password_digest} onChange={this.handleChange} required /><br/>
      <button type="submit">Register</button>
      </form>
      </div>
    );
  }
}
