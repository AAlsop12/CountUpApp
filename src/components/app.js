import React, { Component } from 'react';
import CountingForm from './countingForm';
import Practice from './Practice';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>The Count Up Starts!</h1>
        <CountingForm />
        <Practice />
      </div>
    );
  }
}
