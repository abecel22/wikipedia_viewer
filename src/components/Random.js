import React from 'react';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';

class Random extends React.Component {
  render() {
    return (
      <div className="random-div">{ReactHtmlParser(this.props.random)}</div>
    );
  }
}

export default Random;
