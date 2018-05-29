import React from 'react';
import Component from 'react';
import Link from 'gatsby-link';

import Results from '../components/Results';

import './main.scss';
import search from '../assets/search.svg';

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
      <div className="container">
        <img src={search} alt="search" className="search-icon" />
        <h1>Wikipedia Viewer</h1>
        <div className="search-container">
          <form className="search-container__form" onSubmit={this.wikiSearch}>
            <input
              type="text"
              name="term"
              className="search-container__input"
            />
            <input
              type="submit"
              value="Go!"
              className="search-container__button"
            />
          </form>
        </div>
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default IndexPage;
