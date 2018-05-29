import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <a href={this.props.url}>
        <div className="results-divs">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </a>
    );
  }
}

export default Result;
