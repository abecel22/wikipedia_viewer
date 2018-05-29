import React from 'react';
import Component from 'react';
import Link from 'gatsby-link';

import Results from '../components/Results';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.wikiSearch = this.wikiSearch.bind(this);
    this.state = {
      results: ['', [], [], []],
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
      .then(myJson => {
        console.log(myJson);
        this.setState({
          results: myJson,
        });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Wikipedia Viewer</h1>
        <div className="search-container">
          <form action="" onSubmit={this.wikiSearch}>
            <input type="text" name="term" />
            <input type="submit" value="submit" />
          </form>
        </div>
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default IndexPage;
