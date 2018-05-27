import React from 'react';

class List extends React.Component {
  render() {
    return (
      <div className="results">
        <ul className="results-list">
          {/* UL for list */}
          {this.props.names}
        </ul>
      </div>
    );
  }
}

export default List;
