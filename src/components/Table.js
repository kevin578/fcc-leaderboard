import React from 'react';

export default class Table extends React.Component {
  render() {
    return (
      <div>
        {this.props.campers.length > 1 &&
          <p>{this.props.campers[0].username}</p>
        }
      </div>
    );
  }
}
