import React from 'react';

import Result from './Result';

class Results extends React.Component {
  render() {
    const list = this.props.results[1].map((result, index) => {
      return (
        <Result
          key={index}
          title={this.props.results[1][index]}
          description={this.props.results[2][index]}
          url={this.props.results[3][index]}
        />
      );
    });
    return <div className="results">{list}</div>;
  }
}

export default Results;
