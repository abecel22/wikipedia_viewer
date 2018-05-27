import React from 'react';
import Component from 'react';
import Link from 'gatsby-link';

import SearchBar from '../components/SearchBar/index';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'texas',
    };
  }

  wikiSearch(e) {
    e.preventDefault();

    const term = e.target.elements.term.value.trim();
    fetch(
      `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${term}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <h1>Wikipedia Viewer</h1>
        <div className="search_container" onSubmit={this.wikiSearch}>
          <form action="">
            <input type="text" name="term" />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default IndexPage;
