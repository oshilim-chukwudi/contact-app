import React, { Component } from 'react';

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Please enter a valid name and email address");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"", email:""});
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
        <div className="field">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <br />
        <button className="ui button blue">Add</button>
        </form>
      </div>
      
    );
  }
}

