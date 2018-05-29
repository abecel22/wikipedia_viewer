import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <a href={this.props.url}>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
      </a>
    );
  }
}

export default Result;
