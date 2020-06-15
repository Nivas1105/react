import React from 'react';
import './App.css';

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phonenum: "",
    email: "",
    empid: ""
  };

  change = e => {
    //this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
     this.props.onSubmit(this.state);
     
    
  };

  render() {
    return (
      <form>
        
        <h2>Employee Info </h2>
        <label for="fname">First Name: </label>
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          />
        <br />
        <label for="lname">Last Name: </label>
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          />
        <br />
        <label for="phnum">Phone Num: </label>
        <input
          name="phonenum"
          placeholder="Phone Number"
          value={this.state.phonenum}
          onChange={e => this.change(e)}
          />
        <br />
        <label for="email">E-mail: </label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          />
        <br />
        <label for="empid">Employee ID: </label>
        <input
          name="empid"
          placeholder="Employee ID"
          value={this.state.empid}
          onChange={e => this.change(e)}
          />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
        
      </form>
    );
  }
}