import React from 'react';
import Table from './Table';

export default class App extends React.Component {
  constructor() {
    super();
    this.getData();
    this.state = {
      campers: [],
    };
  }

  getData() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((response) => {
        response.json().then((data) => {
          this.setState(() => ({ campers: data }));
          console.log(this.state.campers[0].username);
        });
      });
  }

  render() {
    return (
      <div className="app">
        <Table campers={this.state.campers} />
      </div>
    );
  }
}
