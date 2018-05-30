import React from 'react';
import Component from 'react';
import Link from 'gatsby-link';

import Results from '../components/Results';
import Random from '../components/Random';

import './main.scss';
import search from '../assets/search.svg';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.wikiSearch = this.wikiSearch.bind(this);
    this.getRandomArticle = this.getRandomArticle.bind(this);
    this.state = {
      results: ['', [], [], []],
      random: '',
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

  getRandomArticle() {
    console.log('clicked');

    fetch(
      `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&generator=random&grnnamespace=0`
    )
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        for (const prop in myJson.query.pages) {
          console.log(myJson.query.pages[prop]);
          let value = myJson.query.pages[prop].extract;
          this.setState({
            random: value,
          });
        }
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <img src={search} alt="search" className="search-icon" />
        <h1>Wikipedia Viewer</h1>
        <h2 className="search-prompt">I want to learn about</h2>
        <div className="search-container">
          <form className="search-container__form" onSubmit={this.wikiSearch}>
            <input
              type="text"
              name="term"
              className="search-container__input"
              autoComplete="off"
            />
            <input
              type="submit"
              value="Search"
              className="search-container__button"
            />
            <input
              type="button"
              value="Surprise Me"
              className="search-container__button"
              onClick={this.getRandomArticle}
            />
          </form>
        </div>
        {this.state.random !== '' ? (
          <Random random={this.state.random} />
        ) : (
          <div />
        )}

        <Results results={this.state.results} />
      </div>
    );
  }
}

export default IndexPage;
