import React from "react";

import  { Component } from 'react'

export default class AddContact extends Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <div className="field">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" placeholder="Name" /> <br /> <br />
            <label htmlFor="Email">Email: </label>
            <input type="Email" name="Email" placeholder="Email" />
        </div>
        <br />
        <button className="ui button blue">Add</button>
      </div>
    )
  }
}
